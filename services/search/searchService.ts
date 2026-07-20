import { StoredFile } from "@/services/storage/storage";
import { AppFile } from "@/types/file";

export type SearchCategory =
  | "All"
  | "PDF"
  | "Images"
  | "Documents"
  | "Videos";

export function convertStoredFileToAppFile(
  file: StoredFile
): AppFile {
  return {
    id: file.id,
    name: file.name,
    mimeType: file.mimeType,
    size: file.size,
    storage: "Local",
    uri: file.uri,
    extension: file.extension,
    category: file.category,
    uploadedAt: file.uploadedAt,
    modifiedAt: file.modifiedAt,
    isFavorite: file.isFavorite,
  };
}

export function mergeFiles(
  localFiles: StoredFile[],
  driveFiles: AppFile[]
): AppFile[] {
  const local = localFiles.map(convertStoredFileToAppFile);

  return [...local, ...driveFiles];
}

export function searchFiles(
  files: AppFile[],
  query: string,
  category: SearchCategory = "All"
): AppFile[] {
  let filtered = files;

  // Search by file name
  if (query.trim().length > 0) {
    const search = query.toLowerCase();

    filtered = filtered.filter((file) =>
      file.name.toLowerCase().includes(search)
    );
  }

  // Category filter
  if (category !== "All") {
    filtered = filtered.filter((file) => {
      const mime = file.mimeType.toLowerCase();

      switch (category) {
        case "PDF":
          return mime.includes("pdf");

        case "Images":
          return mime.includes("image");

        case "Documents":
          return (
            mime.includes("document") ||
            mime.includes("word") ||
            mime.includes("officedocument")
          );

        case "Videos":
          return mime.includes("video");

        default:
          return true;
      }
    });
  }

  // Sort alphabetically
  return filtered.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}