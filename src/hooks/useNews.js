export const useNews = () => {
  const [category, setCategory] = useState("all");

  const handleSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return {
    category,
    handleSelect,
  };
};
