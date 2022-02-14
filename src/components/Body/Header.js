import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import { SearchIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import { useState } from "react";

const Header = ({ childInputSearch }) => {
  const [search, setSearch] = useState("");
  const user = useSelector(selectUser);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    childInputSearch(search);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input
          type="text"
          placeholder="Searchn for Artists, Songs, or others"
          value={search}
          onChange={handleSearch}
        />
      </HeaderLeft>
      <HeaderRight>
        <img src={user.images[0].url} alt="perfil" />
        <h4>{user.display_name}</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
