import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFunFactStore } from "@/stores/useFunFactStore";
import { useLoadingStore } from "@/stores/useLoadingStore";

interface LoadingModalProps {
  logoSrc: string;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ logoSrc }) => {
  const { currentFact, setRandomFact } = useFunFactStore();
  const { isLoading } = useLoadingStore();

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setRandomFact();
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading, setRandomFact]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div className="absolute top-20 px-4 text-center text-sm text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFact}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                {currentFact}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex h-40 w-40 items-center justify-center">
            <motion.div
              className="absolute h-48 w-48 rounded-full border-2 border-yellow-400"
              style={{
                borderTopColor: "transparent",
                borderRightColor: "transparent",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            ></motion.div>

            <img src={logoSrc} alt="OrbitLogo" className="z-10 h-24 w-24" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingModal;
