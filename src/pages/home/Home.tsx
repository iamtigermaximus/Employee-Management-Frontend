import {
  CardBodyText,
  CardHeader,
  PageContainer,
  WelcomeCard,
  WelcomeCardContent,
  WelcomeContainer,
} from './Home.styles';

const HomePage = () => {
  return (
    <PageContainer>
      <WelcomeContainer>
        <WelcomeCard>
          <WelcomeCardContent>
            <CardHeader>Employee Management App</CardHeader>
            <CardBodyText>
              Welcome to the Employee Management App. This app allows you to
              manage your company's employees efficiently.
            </CardBodyText>
          </WelcomeCardContent>
        </WelcomeCard>
      </WelcomeContainer>
    </PageContainer>
  );
};

export default HomePage;
