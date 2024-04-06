"use client";
import { Alert, Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type ProjectName =
  | "weather-web-app"
  | "dictionary-web-app"
  | "dictionary-mobile-app";

interface Project {
  id: ProjectName;
  name: string;
}

const projects: Array<Project> = [
  {
    id: "weather-web-app",
    name: "Weather Forecast Web App",
  },
  {
    id: "dictionary-web-app",
    name: "Dictionary Web App",
  },
  {
    id: "dictionary-mobile-app",
    name: "Dictionary Mobile App",
  },
];

const SelectProject = () => {
  const id = "projects-select";
  const [value, setValue] = useState<ProjectName | "">("");
  const router = useRouter();

  return (
    <>
      <Select
        id={id}
        value={value}
        onChange={(event) => {
          setValue(event.target.value as ProjectName);
        }}
        fullWidth
      >
        {projects.map(({ id, name }) => (
          <MenuItem value={id} key={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <Button
        type="submit"
        onClick={() => {
          if (!value) {
            return alert("Please select a project");
          }
          router.push(`/projects/${value}`);
        }}
        sx={{
          float: "right",
        }}
      >
        Continue
      </Button>
    </>
  );
};

export default SelectProject;
