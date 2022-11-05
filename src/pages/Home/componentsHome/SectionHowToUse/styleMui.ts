import { styled } from "@mui/system";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

export const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
 
    width: 90%;
    margin:  8px auto;
    background-color: var(--color-primary-focus);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
   
    `
);

export const Tab = styled(TabUnstyled)`
  font-family: Poppins, sans-serif;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  &:hover {
    box-shadow: rgba(53, 87, 100, 0.5) 0px 3px 6px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    color: #00adb5;
  }

  &:focus {
    box-shadow: rgba(53, 87, 100, 0.5) 0px 3px 6px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    color: #eeeeee;
  }

  &.${tabUnstyledClasses.selected} {
    box-shadow: rgba(53, 87, 100, 0.5) 0px 3px 6px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    color: #c2ffd9;
    background-color: var(--color-primary);
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanel = styled(TabPanelUnstyled)`
  width: 90%;
  margin: auto;
  font-family: Poppins, sans-serif;
  font-size: 0.875rem;
`;
