import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogLayoutFooter } from '@shared/components/blog-layout-footer/blog-layout-footer.component';
import { BlogLayoutHeader } from '@shared/components/blog-layout-header/blog-layout-header.component';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrl: './blog-layout.component.scss',
  imports: [BlogLayoutFooter, BlogLayoutHeader, RouterModule],
})
export class BlogLayout {}
