export enum IssueStatus {
    Open = 'Open',
    InProgress = 'InProgress',
    Done = 'Done'
}
export enum IssuePriority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export enum IssueType {
    Bug = 'Bug',
    Task = 'Task',
    Story = 'Story'
}
export type Issue = {
    id: number;
    title: string;
    description: string;
    type: IssueType;
    status: IssueStatus;
    priority: IssuePriority;
    createdAt: Date;
    updatedAt: Date;
}

// Path: src/types/issue.ts