import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className='w-3/4 mx-auto'>
                <article className='my-7'>
                    <h3 className='text-4xl text-blue-300 my-8'>What is the purpose of the context API?</h3>
                    <p className='text-lg text-gray-500'>The Context API that enables you to share global data (like variable,  function,  object, array etc) with multiple components or that can be passed around without props-drilling.  Context API is a new Feature added in version 16.3 of react it’s solve lots of problem that related state management. When you use a state management library your app performance is affected . That's why you use context API passing state to grandparent component to parent component and child component even siblings component or nested components without using props.
                        When you use context API you hear new Words like create context, provider, consumer, useContext hooks
                        Create Context:
                        To create a context  call the createContext function this will provide default value to the consumer.
                        Provider:
                        The context object we just created exposes a Provider component that has a prop named value. Any primitive value or object passed to this prop will be accessible in any child of this component.
                        Consumer:
                        Who can access the provided data called consumers.
                    </p>
                </article>
                <article className='my-7'>
                    <h3 className='text-4xl text-blue-300 my-8'>What is the Semantic Tag?</h3>
                    <p className='text-lg text-gray-500'>Semantic tags mainly describe the purpose of the element and also describe what is the type of the content inside the element.
                        Use of non-semantic tags or elements are too common nowadays like div. But where a div element could contain any type of information, on the other hand semantic tags contain a specific content like header and also it is easy to identify.
                        Benefits of semantic tag :
                        Readability :- where you use semantic tag instead of non-semantic tag it increases code readability as a programmer you read hundreds or thousands lines of code so it makes it easier to read.
                        Accessibility :- In this age, when you use semantic tag  search engines to figure out easily what the content of your website is, it makes your website more accessible. This also helps Assistive technologies like screen readers understand the content of the website. So it gives a better experience for your user.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Blogs;