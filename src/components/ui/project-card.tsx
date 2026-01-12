import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { FC } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  stack: readonly string[];
  links: {
    github: string;
    demo: string;
  };
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  links,
}) => {
  return (
    <Card
      className="
        flex h-full flex-col
        rounded-xl
        border border-white/10
        bg-card/60
        transition-all duration-300 ease-out
        sm:hover:scale-[1.03]
        sm:hover:border-primary/50
        sm:hover:bg-card
      "
    >
      {/* HEADER */}
      <CardHeader className="space-y-2 p-5 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">
          {title}
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      {/* STACK */}
      <CardContent className="flex-grow px-5 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* FOOTER */}
      <CardFooter
        className="
          flex flex-col gap-3
          px-5 pb-5
          sm:flex-row sm:gap-4 sm:px-6 sm:pb-6
        "
      >
        <Button
          asChild
          variant="outline"
          className="w-full sm:w-auto"
        >
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </Button>

        <Button
          asChild
          className="w-full sm:w-auto"
        >
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
