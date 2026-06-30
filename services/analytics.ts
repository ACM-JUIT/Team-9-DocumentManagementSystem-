import { StoredFile } from './storage';

export interface Analytics {
  totalFiles: number;

  totalSize: number;

  pdf: number;

  image: number;

  document: number;

  video: number;

  audio: number;

  archive: number;

  other: number;
}

export function calculateAnalytics(
  files: StoredFile[]
): Analytics {

  const analytics: Analytics = {

    totalFiles: files.length,

    totalSize: 0,

    pdf: 0,

    image: 0,

    document: 0,

    video: 0,

    audio: 0,

    archive: 0,

    other: 0,
  };

  files.forEach(file => {

    analytics.totalSize += file.size;

    switch (file.category) {

      case 'PDF':
        analytics.pdf++;
        break;

      case 'Image':
        analytics.image++;
        break;

      case 'Document':
        analytics.document++;
        break;

      case 'Video':
        analytics.video++;
        break;

      case 'Audio':
        analytics.audio++;
        break;

      case 'Archive':
        analytics.archive++;
        break;

      default:
        analytics.other++;
    }

  });

  return analytics;
}