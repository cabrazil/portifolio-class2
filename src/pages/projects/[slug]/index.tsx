import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import LoadingScreen from '../../../components/LoadingScreen';
import ProjectBanner from '../../../components/ProjectBanner';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projects({ projeto }: ProjetoProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Head>
        <title>{projeto.title} | Meu portifólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>
      <Header />
      <ProjectBanner
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'projetos')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projetos', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: { projeto },
    revalidate: 86400
  };
};
