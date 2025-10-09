import { Fragment, type ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import mockShortcuts, { ShortcutType } from "@/mockdata/MockShortcuts";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({ homeElement, separator }: TBreadCrumbProps) => {
  const pathname = usePathname();
  const [history, setHistory] = useState<{ url: string; alias: string }[]>([]);

  const session = useSession();

  const memberNameQuery = api.members.getNameByID;
  const teamNameQuery = api.teams.getTeamNameByID;

  const pathSegments = pathname?.split("/") ?? [];
  const lastSegment = pathSegments[pathSegments.length - 1];

  const isProfilePage = pathname?.includes("profile");
  const isTeamPage = pathname?.includes("teams");

  const memberID = isProfilePage
    ? pathname?.includes("me") && session.data
      ? session.data?.user.memberInfo.memberID
      : Number(lastSegment)
    : null;

  const teamID = isTeamPage
    ? pathname?.includes("find") && session.data?.user.memberInfo.teamHistory[0]
      ? session.data?.user.memberInfo.teamHistory.length === 1
        ? session.data?.user.memberInfo.teamHistory[0]?.team.teamID
        : null
      : Number(lastSegment)
    : null;

  const memberQueryResult = memberNameQuery.useQuery(memberID, {
    enabled: !!memberID,
  });

  const teamQueryResult = teamNameQuery.useQuery(teamID, {
    enabled: !!teamID,
  });

  const memberName = memberQueryResult.data?.name;
  const teamName = teamQueryResult.data?.teamName;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHistory(getLocalStorageHistory());
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && pathname) {
      if (isInternalShortcut(pathname)) {
        resetHistory(pathname);
      } else {
        updateHistory(pathname);
      }
    }
  }, [pathname, memberName, teamName]);

  const getLocalStorageHistory = (): { url: string; alias: string }[] => {
    if (typeof window !== "undefined") {
      const storedHistory = localStorage.getItem("breadcrumbHistory");
      try {
        return storedHistory
          ? (JSON.parse(storedHistory) as { url: string; alias: string }[])
          : [{ url: "/", alias: "Home" }];
      } catch (error) {
        console.error(
          "Failed to parse breadcrumb history from localStorage:",
          error,
        );
      }
    }
    return [{ url: "/", alias: "Home" }];
  };

  const setHistoryTo = (path: string) => {
    setHistory((prevHistory) => {
      const pathIndex = prevHistory.findIndex((item) => item.url === path);
      if (pathIndex !== -1) {
        const newHistory = prevHistory.slice(0, pathIndex + 1);
        localStorage.setItem("breadcrumbHistory", JSON.stringify(newHistory));
        return newHistory;
      }
      return prevHistory;
    });
  };

  const isInternalShortcut = (path: string): boolean => {
    if (path === "/profile/" + session.data?.user.memberInfo.memberID) {
      return true;
    }

    return mockShortcuts
      .filter((shortcut) => shortcut.type !== ShortcutType.EXTERNAL)
      .some((shortcut) => shortcut.shortcuts.some((link) => link.url === path));
  };

  const resetHistory = (path: string) => {
    const alias = path.includes("profile")
      ? (memberName ?? "Loading...")
      : path.includes("team") && !path.includes("teams")
        ? (teamName ?? "Loading...")
        : (path.split("/")[path.split("/").length - 1] ?? path)
            .charAt(0)
            .toUpperCase() +
          (path.split("/")[path.split("/").length - 1] ?? path).slice(1);

    if (alias === "Loading...") {
      return;
    }

    const newHistory = [
      { url: "/", alias: "Home" },
      { url: path, alias: alias },
    ];
    setHistory(newHistory);
    localStorage.setItem("breadcrumbHistory", JSON.stringify(newHistory));
  };

  const updateHistory = (path: string) => {
    const computeAlias = () => {
      if (path.includes("teams") && !path.includes("edit")) {
        return teamName ?? "Loading...";
      }

      if (path.includes("profile")) {
        return memberName ?? "Loading...";
      }
      return capitalize(path.split("/").pop() ?? path);
    };

    const alias = computeAlias();

    if (alias === "Loading...") {
      return;
    }

    setHistory((prevHistory) => {
      const pathIndex = prevHistory.findIndex((item) => item.url === path);
      if (pathIndex === -1) {
        const newHistory = [...prevHistory, { url: path, alias }];
        localStorage.setItem("breadcrumbHistory", JSON.stringify(newHistory));
        return newHistory;
      } else {
        const newHistory = prevHistory.slice(0, pathIndex + 1);
        localStorage.setItem("breadcrumbHistory", JSON.stringify(newHistory));
        return newHistory;
      }
    });
  };

  const capitalize = (str: string): string => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleLinkClick = (path: string) => {
    setHistoryTo(path);
  };

  return (
    <ul className="text-md mt-4 hidden font-normal backdrop-blur-sm md:flex">
      <li className="mr-2 hover:underline">
        <Link href={"/"} onClick={() => handleLinkClick("/")}>
          {homeElement}
        </Link>
      </li>
      {history.map((breadcrumb, index) => {
        const { url, alias } = breadcrumb;
        if (!url || index === 0) return null; // Ensure breadcrumb is valid

        return (
          <Fragment key={index}>
            {history.length !== index && separator}
            <li
              className={
                pathname === url
                  ? `${"mx-2 hover:underline"} ${"text-orangeSherbert"}`
                  : "mx-2 hover:underline"
              }
            >
              <Link href={url} onClick={() => handleLinkClick(url)}>
                {alias}
              </Link>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};

export default NextBreadcrumb;
