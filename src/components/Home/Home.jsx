import { useSelector } from 'react-redux';
import { getSubtitle } from '../../utils/utils';

import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';
import Content from '../Content/Content';

const Home = () => {
  const recipes = useSelector((state) => state.recipes.list);

  const welcomeMessage = getSubtitle(recipes.length);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes JustCookIt"
        text={welcomeMessage}
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
