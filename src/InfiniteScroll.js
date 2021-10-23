import React, { useEffect, useState, useRef, useCallback  } from 'react';
import { Appwrite } from "appwrite";
import { ENDPOINT, PROJECT_ID, COLLECTION_ID } from "./config";
import "./InfiniteScroll.css";

// Init Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
;

const InfiniteScroll = () => {
    const [posts, setPosts] = useState([]); 
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(true)
    const OFFSET_INCREMENT = 3;

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            setOffset(prevOffset => prevOffset + OFFSET_INCREMENT)
        }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        setLoading(true);
        let promise = appwrite.database.listDocuments(COLLECTION_ID, [], OFFSET_INCREMENT, offset);
        promise.then(function (res) {
            console.log(res); // Success
            const newList = posts.concat(res.documents);
            setPosts([...new Set(newList)]);
            setHasMore(res.documents.length > 0);
            setLoading(false);
        }, function (error) {
            console.log(error); // Failure
        });
    }, [offset])

    return (
    <div className="container">
        <div className="posts-list">
            {
                posts.map((post, index) => {
                    if(posts.length === index + 1) {
                        {/* Add Ref to last post */}
                        return (
                        <div className="post" key={index} ref={lastBookElementRef} >
                        <div className="metadata">
                            <div className="avatar-container">
                                <img className="avatar" src={ post.avatar } width="25px" height="25px" />
                            </div>
                            <div className="image-details">
                                <div className="posted_by"> { post.username } </div>
                                <div className="location"> { post.location } </div>
                            </div>
                        </div>
                            <img className="image-card" src={ post.imageUrl } width="100%"/>
                        </div>)
                    } else {
                        return (
                        <div className="post" key={index}>
                        <div className="metadata">
                            <div className="avatar-container">
                                <img className="avatar" src={ post.avatar } width="25px" height="25px" />
                            </div>
                            <div className="image-details">
                                <div className="posted_by"> { post.username } </div>
                                <div className="location"> { post.location } </div>
                            </div>
                        </div>
                        <img className="image-card" src={ post.imageUrl } width="100%"/>
                        </div>)
                    }
                })
            }
             { loading && <div className="loading"> Loading </div> }
             { !hasMore && <div className="footer"> THE END </div> }             
        </div>
    </div>)
}

export default InfiniteScroll;