import React from "react";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import FifthStep from "@/components/formpage/modaler/FifthStep";
import FourthStep from "@/components/formpage/modaler/FourthStep";
import SecondStep from "@/components/formpage/modaler/SecondStep";
import FirstStep from "@/components/formpage/modaler/FirstStep";
import SixthStep from "@/components/formpage/modaler/SixthStep";
import ApplyStep from "@/components/formpage/modaler/ApplyStep";
import ThirdStep from "@/components/formpage/modaler/ThirdStep";
import "@/styles/globals.css";

export default function FormPage() {
  return (
    <>
      <Form></Form>
    </>
  );
}
