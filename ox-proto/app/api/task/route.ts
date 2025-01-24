import { NextResponse } from "next/server";

export async function GET(request: Request) {
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
    return NextResponse.json(tasks);
  }