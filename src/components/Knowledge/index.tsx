import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiPostgresql } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Javascript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
        <KnowledgeItem title="Node.js" icon={<FaNodeJs />} />
        <KnowledgeItem title="PostgreSQL" icon={<SiPostgresql />} />
      </section>
    </Container>
  );
}

export default Knowledge;
