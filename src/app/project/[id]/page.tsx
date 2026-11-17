import { Suspense } from 'react';
import type { Metadata } from 'next';
import { ProjectDetailClient } from './ProjectDetailClient';
import { PROJECTS } from '@/data/projects';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | VETHESNAN',
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | VETHESNAN`,
    description: `Watch ${project.title} (${project.year || '2024'}), ${project.subtitle}. Directed / Cinematography by Vethesnan.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ProjectDetailClient id={id} />
    </Suspense>
  );
}
