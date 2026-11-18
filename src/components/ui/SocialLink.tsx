import { Camera, MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';

const iconMap: Record<'instagram' | 'whatsapp', ReactNode> = {
  instagram: <Camera size={20} />,
  whatsapp: <MessageCircle size={20} />,
};

export default function SocialLink({ platform, url, value }: { platform: 'instagram' | 'whatsapp'; url: string; value: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg glass hover:bg-white/10 transition-all group">
      <span className="text-white/80 group-hover:text-white transition-colors">{iconMap[platform]}</span>
      <div>
        <p className="text-xs text-white/50">{platform === 'instagram' ? 'Instagram' : 'WhatsApp'}</p>
        <p className="text-sm text-white/90">{value}</p>
      </div>
    </a>
  );
}