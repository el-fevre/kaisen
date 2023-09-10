import * as React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

const labels = ['Development', 'Design', 'Marketing', 'QA', 'Bug'];

enum IssueType {
  Task = 'Task',
  Bug = 'Bug',
  Story = 'Story',
  Feature = 'Feature',
}

enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

interface IFormInput {
  name: string;
  description: string;
  dueDate: string;
  issueType: IssueType;
  priority: Priority;
  labels: string[];
  assignedTo: string;
}

export default function AddIssueModal() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 mx-auto z-50 max-w-xl max-h-sm">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between -mb-3 p-5">
          <h1 className="text-4xl font-semibold -pb-2 border-b-2 border-slate-900 shadow">
            Add New Issue
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-items-center p-5 my-auto"
        >
          <label htmlFor="name">Issue name</label>
          <input
            className="w-full h-10 px-3 mb-2 text-base  text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Issue name"
            {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          <label
            htmlFor="description"
            className=""
          >
            Description
          </label>
          <input
            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Please enter a description"
            {...register('description', { required: true, minLength: 20 })}
          />
          <label htmlFor="issueType">Issue type</label>
          <select
            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            {...register('issueType', { required: true })}
          >
            <option value={IssueType.Task}>Task</option>
            <option value={IssueType.Bug}>Bug</option>
            <option value={IssueType.Story}>Story</option>
            <option value={IssueType.Feature}>Feature</option>
          </select>

          <label htmlFor="dueDate">Due date</label>
          <input
            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="date"
            placeholder="Due date"
            {...register('dueDate', { required: true })}
          />
          <label htmlFor="priority">Priority</label>
          <select
            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            {...register('priority', { required: true })}
          >
            <option value={Priority.Low}>Low</option>
            <option value={Priority.Medium}>Medium</option>
            <option value={Priority.High}>High</option>
          </select>
          <label htmlFor="labels">Labels</label>
          <select
            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            {...register('labels', { required: true })}
          >
            {labels.map((label) => (
              <option value={label}>{label}</option>
            ))}
            isMulti={true}
          </select>
          <span>
            <button
              type="button"
              onClick={() => setIsShown(false)}
              className="w-1/2 h-10  px-3 content-center -pb-2 mb-2 text-center bg-red-700 text-white  border rounded-lg focus:shadow-outline"
            >
              Close
            </button>
            <button
              type="submit"
              className="w-1/2 h-10  px-3 content-center -pb-2 mb-2 text-center bg-blue-700 text-white  border rounded-lg focus:shadow-outline"
            >
              Submit
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}
