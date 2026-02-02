
export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  category: string;
  iconName: 'face' | 'skin' | 'body';
}

export interface FAQItem {
  question: string;
  answer: string;
}
