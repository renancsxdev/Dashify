"use client"

import { ArrowUpRight, Users, CreditCard, DollarSign, MousePointerClick } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AnalyticsPreview() {
  return (
    <div className="w-full bg-background p-4 rounded-lg border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="w-32 h-8 rounded-md bg-muted"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+12.5%</span> from previous period
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+0.5%</span> from previous period
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45.65</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+7.2%</span> from previous period
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.56</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+14.2%</span> from previous period
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="traffic" className="mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>
        <TabsContent value="traffic">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
              {/* Simplified traffic visualization */}
              <div className="w-full h-full flex">
                <div className="w-1/2 h-full p-4">
                  {/* Donut chart */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="hsl(var(--primary))"
                          strokeWidth="20"
                          strokeDasharray="75 25"
                          strokeDashoffset="25"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="hsl(var(--primary)/0.7)"
                          strokeWidth="20"
                          strokeDasharray="50 50"
                          strokeDashoffset="0"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="hsl(var(--primary)/0.4)"
                          strokeWidth="20"
                          strokeDasharray="25 75"
                          strokeDashoffset="-75"
                        />
                        <circle cx="50" cy="50" r="20" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 h-full p-4 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="flex-1 text-sm">Organic Search</div>
                    <div className="text-sm font-medium">45%</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/70"></div>
                    <div className="flex-1 text-sm">Direct</div>
                    <div className="text-sm font-medium">30%</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                    <div className="flex-1 text-sm">Social Media</div>
                    <div className="text-sm font-medium">25%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="conversion">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>How visitors convert to customers</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
              {/* Simplified funnel visualization */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <div className="w-full max-w-md h-12 bg-primary/20 rounded-t-lg flex items-center px-4">
                  <span className="font-medium">Visitors</span>
                  <span className="ml-auto">100%</span>
                </div>
                <div className="w-[90%] max-w-[calc(100%-2rem)] h-12 bg-primary/30 flex items-center px-4">
                  <span className="font-medium">Product Views</span>
                  <span className="ml-auto">65%</span>
                </div>
                <div className="w-[70%] max-w-[calc(100%-4rem)] h-12 bg-primary/50 flex items-center px-4">
                  <span className="font-medium">Add to Cart</span>
                  <span className="ml-auto">35%</span>
                </div>
                <div className="w-[50%] max-w-[calc(100%-6rem)] h-12 bg-primary/70 flex items-center px-4">
                  <span className="font-medium">Checkout</span>
                  <span className="ml-auto">15%</span>
                </div>
                <div className="w-[30%] max-w-[calc(100%-8rem)] h-12 bg-primary rounded-b-lg flex items-center px-4 text-primary-foreground">
                  <span className="font-medium">Purchase</span>
                  <span className="ml-auto">5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>Revenue by product category and time</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
              {/* Simplified revenue visualization */}
              <div className="w-full h-full flex">
                <div className="w-1/2 h-full p-4">
                  {/* Line chart */}
                  <div className="w-full h-full flex items-end">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path
                        d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,20 L60,25 L70,15 L80,10 L90,5 L100,0"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,20 L60,25 L70,15 L80,10 L90,5 L100,0 L100,50 L0,50"
                        fill="hsl(var(--primary)/0.1)"
                        stroke="none"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2 h-full p-4 flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Top Categories</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Electronics</span>
                        <span className="font-medium">$5,240</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Clothing</span>
                        <span className="font-medium">$3,800</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Home & Garden</span>
                        <span className="font-medium">$1,950</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

