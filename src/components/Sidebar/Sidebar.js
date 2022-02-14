import { PlayList, SidebarContainer } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLibraryMusic } from "react-icons/md";
import SidebarChoice from "./SidebarChoice";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="logo"
      />
      <SidebarChoice title="Home" Icon={AiFillHome} />
      <SidebarChoice title="Search" Icon={SearchIcon} />
      <SidebarChoice title="You Library" Icon={MdLibraryMusic} />
      <PlayList>Playlist</PlayList>
      <hr />
      <SidebarChoice title="Chillout Music" />
      <SidebarChoice title="Rockin' Vibes" />
      <SidebarChoice title="Cat Clyde Radio" />
      <SidebarChoice title="This is Gary Clark Jr" />
      <SidebarChoice title="Strancy" />
      <SidebarChoice title="Hits Club" />
      <SidebarChoice title="Study Beats" />
      <SidebarChoice title="Caamp Mix" />

      <SidebarChoice title="MTV 90's" />
    </SidebarContainer>
  );
};

export default Sidebar;
