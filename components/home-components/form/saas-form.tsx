"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Rocket } from "lucide-react";

interface SaasFormProps {
  onSubmit: (data: { name: string; description: string; count: number }) => void;
}

export function SaasForm({ onSubmit }: SaasFormProps) {
  const [name, setName] = React.useState("");
  const [saasDescription, setSaasDescription] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(name.trim().length<= 2 || saasDescription.trim().length<= 2 ) return;
    onSubmit({ name, description: saasDescription, count:10 });
  };

  const handleClear = () => {
    setName("");
    setSaasDescription("");
  };

  return (
    <form id="saas-form" onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-base font-semibold">
            Name of your SaaS
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your SaaS name"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="description" className="text-base font-semibold">
            Describe your SaaS in detail
          </Label>
          <Textarea
            id="description"
            value={saasDescription}
            onChange={(e) => setSaasDescription(e.target.value)}
            placeholder="What problem does your SaaS solve? Who is your target audience?"
            rows={4}
            className="mt-1"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          className="bg-blue-600 hover:bg-blue-700 w-[200px] font-semibold"
          disabled={name?.trim().length === 0 || saasDescription?.trim().length <= 2}
          type="submit"
        >
          <Rocket className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
        <Button
          className="bg-red-400 hover:bg-red-500 text-white"
          variant="outline"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </form>
  );
}