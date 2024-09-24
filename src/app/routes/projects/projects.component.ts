import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  majorProjects = [
    {
      title: 'Projet Majeur 1',
      image: 'assets/images/projects/major-project-1.jpg',
      description: 'Description détaillée du projet majeur 1.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      link: '#'
    },
    {
      title: 'Projet Majeur 2',
      image: 'assets/images/projects/major-project-2.jpg',
      description: 'Description détaillée du projet majeur 2.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Projet Majeur 3',
      image: 'assets/images/projects/major-project-3.jpg',
      description: 'Description détaillée du projet majeur 3.',
      technologies: ['React', 'Redux', 'Sass'],
      link: '#'
    }
  ];

  ongoingProjects = [
    {
      title: 'Projet en Cours 1',
      image: 'assets/images/projects/ongoing-project-1.jpg',
      description: 'Brève description du projet en cours 1.',
      progress: 60, // en pourcentage
    },
    {
      title: 'Projet en Cours 2',
      image: 'assets/images/projects/ongoing-project-2.jpg',
      description: 'Brève description du projet en cours 2.',
      progress: 35, // en pourcentage
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
