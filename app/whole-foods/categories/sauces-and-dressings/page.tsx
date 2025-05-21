import { Metadata } from 'next';
import SaucesAndDressingsClient from './SaucesAndDressingsClient';

export const metadata: Metadata = {
  title: 'Sauces & Dressings | The Divine Hands',
  description: 'Discover our range of artisanal sauces and dressings, made with natural ingredients and traditional recipes.',
};

export default function SaucesAndDressingsPage() {
  return <SaucesAndDressingsClient />;
} 