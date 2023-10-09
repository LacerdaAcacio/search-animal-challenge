import { Link } from "react-router-dom";
import { useEffect } from "react";
import SearchForm from "../../components/Form/SearchForm";
import { HomeContainer } from "../../styles/styles";
import Logo from "../../components/Logo";
import useHiddenSearch from "../../hooks/contexts/useHiddenSearch";

function HomePage() {
  const { setHiddenSearch } = useHiddenSearch();

  useEffect(() => {
    setHiddenSearch(true);
  }, [setHiddenSearch]);

  return (
    <HomeContainer>
      <Link to="/">
        <Logo />
      </Link>
      <SearchForm />
    </HomeContainer>
  );
}
export default HomePage;
