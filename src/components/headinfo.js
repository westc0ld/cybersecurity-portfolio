import Head from "next/head";

const HeadInfo = ({title, keyword, contents}) => {
  return (
    <div>
       <Head>
            <title>{title}</title>
            <meta keyword={keyword}/>
            <meta contents={contents}/>
        </Head>
    </div>
  )
}

HeadInfo.defaultProps = {
  title: "WEST_COLD",
  keyword: 'portpolio',
  contents: 'some content'
}

export default HeadInfo

