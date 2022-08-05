import React from 'react'
import Image from "next/image";
import _ from "lodash"

function DetailItem({data, detailPageId, setDetailPageId}) {

    const detailData = _.filter(data, {id: detailPageId})
    console.log(detailData,'detailData')
    const title = detailData[0].properties.Name.title[0].plain_text
    const description = detailData[0].properties.Description.rich_text[0].plain_text
    const imgSrc = detailData[0].cover.file?.url || detailData[0].cover.external.url
    const disabled = () => {
        setDetailPageId("list")
    }

  return (
    <section className="text-gray-600 body-font" style={{ width: '80vw'}} >
        <div className="flex lg:flex-row flex-col container 
        mx-auto px-5 py-24 items-center justify-center w-full">
            {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            <div style={{display: 'flex', flex: 1 , alignItems:'center',justifyContent: 'center'}}>
                <Image
                    classNameName="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-center rounded"
                    src={imgSrc}
                    alt="cover image"
                    width="400"
                    height="400"
                    // layout="responsive"
                    // objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="lg:mt-0 mt-10" style={{display: 'flex', flex: 1,  alignItems:'center',justifyContent: 'center'}}>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {title}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        {description}</p>
                    <div className="flex justify-center">
                        <button 
                        className="inline-flex 
                        text-white 
                        bg-indigo-500 
                        border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 
                        rounded text-lg"
                        >Button</button>
                        <button 
                        className="ml-4 inline-flex 
                        text-gray-700 bg-gray-100 border-0 
                        py-2 px-6 focus:outline-none 
                        hover:bg-gray-200 rounded text-lg"
                        onClick={disabled}
                        >뒤로가기</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailItem