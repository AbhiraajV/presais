"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { FeatureList } from "./features/feature-list";
import { SaasForm } from "./form/saas-form";
import { CountdownTimer } from "./timer/countdown-timer";
import { AnalysisShowcase } from "./analysis/analysis-cards";
import { User } from "@prisma/client";

interface HomePageFormProps {
  onSubmit: (data: { name: string; description: string; count: number }) => void;
  user: User
}

export default function HomePageForm({ onSubmit, user }: HomePageFormProps) {
  const TIME = 60 * 60 * 1000;

  function has24HoursPassed(inputTime: string): boolean {
    console.log({inputTime})
    if (!inputTime) return true;
    const givenDate = new Date(inputTime);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - givenDate.getTime();
    return timeDifference >= TIME;
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-2 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full transform translate-x-32 translate-y-[-50%] blur-3xl"></div>

          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              SaaS Market & Competitor analysis report
            </CardTitle>
            <CardDescription>
              <div className="space-y-4">
                <div className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  Get AI-generated insights for your SaaS idea
                </div>
                <FeatureList />
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            {user.lastRequest && !has24HoursPassed(user.lastRequest.toString()) ? (
              <CountdownTimer targetTime={user.lastRequest.toString()} />
            ) : (
              <SaasForm onSubmit={onSubmit} />
            )}
          </CardContent>

          <CardFooter className="text-xs text-gray-500 italic relative z-10">
            *all reports are shareable
          </CardFooter>
        </Card>
      </motion.div>

      <AnalysisShowcase />
    </div>
  );
}