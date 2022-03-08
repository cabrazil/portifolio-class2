import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import ProjectLink from '../../components/ProjectLink';
import { getPrismicClient } from '../../services/prismic';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projects({ projetos }: ProjetoProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Meu portifólio</title>
        <meta
          name="description"
          content="Aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjectLink
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projetos')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
