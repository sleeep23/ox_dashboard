"use client"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

export function OverallTasks() {
    const tasks = {
        tasks:[
        {
            id:1, 
            assignee: "dongho",
            in_project_id: 1,
            in_project_name: "project 1",
            status: "InProgress",
            priority: "high",
            task_due_date: "2025-01-01",
            ox_due_date: "2025-01-01"
        },
        {
            id:2, 
            assignee: "dongho",
            in_project_id: 2,
            in_project_name: "project 2",
            status: "InProgress",
            priority: "high",
            task_due_date: "2025-01-01",
            ox_due_date: "2025-01-01"
        },
        {
            id:3, 
            assignee: "dongho",
            in_project_id: 3,
            in_project_name: "project 3",
            status: "InProgress",
            priority: "high",
            task_due_date: "2025-01-01",
            ox_due_date: "2025-01-01"
        },
    ]}
    return (
      <div>{tasks.tasks.map((task) => (
        <Card key={task.id}>
        <CardHeader>
        <CardTitle>{task.in_project_name}</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="flex justify-between">
        <p>{task.assignee}</p>
        <Badge variant="destructive">{task.priority}</Badge>
        </div>
        <p>{task.status}</p>
        </CardContent>
        <CardFooter>
        <Button variant="outline" size="sm">View</Button>
        </CardFooter>
        </Card>
        ))}
        
      </div>
    )
}
  