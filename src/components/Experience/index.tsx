import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="02 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Bootcamp GoSatck Rocketseat realizado em 2021 com Typescrpt e ReactJS"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Bootcamp GoSatck Rocketseat realizado em 2021 com Typescrpt e ReactJS"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Bootcamp GoSatck Rocketseat realizado em 2021 com Typescrpt e ReactJS"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Bootcamp GoSatck Rocketseat realizado em 2021 com Typescrpt e ReactJS"
        />
      </section>
    </Container>
  );
}

export default Experience;
