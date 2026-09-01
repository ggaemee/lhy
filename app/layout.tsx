import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: '이희윤 | 청소년과 지역사회의 성장을 설계합니다', description: '25년의 청소년활동 경험과 AI 활용 역량으로 청소년과 지역사회의 성장을 설계하는 이희윤입니다.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
