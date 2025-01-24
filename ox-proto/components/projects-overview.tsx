"use client"

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";

export function ProjectsOverview() {
    return (
    <div className="grid gap-4 md:grid-cols-3">
        {/* Marketing */}
    <Card>
    <CardHeader>
    <CardTitle>Marketing</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
    {/* 첫 번째 작업 */}
    <div className="flex items-start justify-between">
    <div>
    <p className="text-sm font-medium leading-none">
    고객 세그먼트별 메일 템플릿 작성
    </p>
    <p className="text-xs text-muted-foreground">ID: 234 | 101 project</p>
    </div>
    <Badge variant="destructive">High</Badge>
    </div>
          {/* 두 번째 작업 */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium leading-none">
                새로운 상품/서비스 방향성 설정
              </p>
              <p className="text-xs text-muted-foreground">ID: 234 | 101 project</p>
            </div>
            <Badge variant="warning">Medium</Badge>
          </div>
    
          {/* 세 번째 작업 */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium leading-none">신제품/메인 홍보</p>
              <p className="text-xs text-muted-foreground">ID: 234 | 101 project</p>
            </div>
            <Badge variant="secondary">Low</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            전체 보기
          </Button>
        </CardFooter>
      </Card>
    </div>
    );
    }