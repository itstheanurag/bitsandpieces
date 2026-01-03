"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function ButtonPreview() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-8">
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
}

function CardPreview() {
  return (
    <div className="flex justify-center p-8">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <input
                  id="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Name of your project"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function InteractivePreview() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-muted/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Component Playground
          </h2>
          <p className="text-muted-foreground text-lg">
            Interact with our components. Fully accessible, dark mode ready, and
            styled with Tailwind.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="button" className="w-full">
            <div className="flex items-center justify-between mb-8">
              <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                <TabsTrigger value="button">Button</TabsTrigger>
                <TabsTrigger value="card">Card</TabsTrigger>
              </TabsList>
            </div>

            <div className="relative rounded-xl border border-border bg-background shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {/* This would be a toggle for code/preview in a real app, keeping it simple for now */}
              </div>

              <TabsContent value="button" className="mt-0">
                <div className="min-h-[400px] flex items-center justify-center bg-dot-pattern">
                  <ButtonPreview />
                </div>
              </TabsContent>
              <TabsContent value="card" className="mt-0">
                <div className="min-h-[400px] flex items-center justify-center bg-dot-pattern">
                  <CardPreview />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
