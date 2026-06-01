import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NewsCard {
  id: number;
  authorAvatar: string;
  authorName: string;
  date: string;
  category: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.html',
  styleUrls: ['./latest-news.scss']
})
export class LatestNewsComponent {

  newsCards: NewsCard[] = [
    {
      id: 1,
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
      authorName: 'Joshep Thomas',
      date: 'April 04, 2021',
      category: 'Staff Meeting',
      title: 'Participate in Staff Meetings Manage Dedicated To Marketing',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80'
    },
    {
      id: 2,
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
      authorName: 'Savana Rechard',
      date: 'April 04, 2021',
      category: 'Staff Meeting',
      title: 'Participate in Staff Meetings Manage Dedicated To Marketing',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
    },
    {
      id: 3,
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
      authorName: 'Rechard Kalvin',
      date: 'April 04, 2021',
      category: 'Staff Meeting',
      title: 'Participate in Staff Meetings Manage Dedicated To Marketing',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
    }
  ];
}
