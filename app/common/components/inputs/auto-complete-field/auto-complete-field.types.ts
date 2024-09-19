export type AutoCompleteFieldProps = {
  isLoading: boolean;
  options: {
    title: string;
    authors: string;
    description: string;
    bookImage: string;
  }[];
  value: string;
  onChange: (value: string) => void;
  handleSearchBookName: (value: string) => void;
  setSelectedBook: (
    book: {
      title: string;
      authors: string;
      description: string;
      bookImage: string;
    } | null,
  ) => void;
  helperText: string | undefined;
  error: boolean;
};
