// Imports
import React, { useRef, useEffect } from 'react';
// Component Imports
import CreatePost from '../../components/CreatePost/CreatePost';
import SortBar from '../../components/SortBar/SortBar';
import HomeSideBar from '../../components/HomeSideBar/HomeSideBar';
import Grid from '../Grid/Grid';
// Utility Imports
import userArray from '../../utils/userArray';
// CSS Imports
import './Home.scss';
export default function Home(props) {
    const ref = useRef(null);
    const { randomIntToString, userName, currentSort, currentSub, renderNum, currentPost, mainComment, writeComment, subreddits, topSubreddits, currentEditedComment, writeNestedComment, editComment, editNestedComment, loginStatus, setLoginModalState, loginModalState, posts, savePost, submitNestedComment, handleNestedComment, handleLikeComment, submitComment, openPost, handleSubMembership, handleLike, handleNavigate, navToSubmit, enablePremium, setIndex, navToUserProfile, setSort, navToProfile, setRenderNum, } = props;
    useEffect(() => {
        if (!ref.current)
            return;
        const cachedRef = ref.current;
        const observer = new IntersectionObserver(() => {
            setTimeout(() => setRenderNum((prev) => prev + 2), 750);
        });
        observer.observe(cachedRef);
    }, [ref]);
    return (<div className="home" style={{ maxHeight: loginModalState === "closed" ? "" : "92.75vh", overflow: loginModalState === "closed" ? "" : "hidden" }}>
      <div className="feed" style={{ overflow: "hidden" }}>
        {userArray.findIndex(user => user.username === userName) === -1 && <CreatePost randomIntToString={randomIntToString} userName={userName} navToSubmit={navToSubmit} loginStatus={loginStatus}/>}
        
        <SortBar currentSort={currentSort} setSort={setSort}/>

        <Grid currentSub={currentSub} currentPost={currentPost} loginModalState={loginModalState} currentSort={currentSort} handleNavigate={handleNavigate} posts={posts} handleLike={handleLike} openPost={openPost} userName={userName} mainComment={mainComment} writeComment={writeComment} submitComment={submitComment} handleLikeComment={handleLikeComment} loginStatus={loginStatus} handleNestedComment={handleNestedComment} setIndex={setIndex} writeNestedComment={writeNestedComment} submitNestedComment={submitNestedComment} currentEditedComment={currentEditedComment} editComment={editComment} editNestedComment={editNestedComment} randomIntToString={randomIntToString} savePost={savePost} renderNum={renderNum} navToUserProfile={navToUserProfile} navToProfile={navToProfile}/>

        <div className="loading" ref={ref}>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          Loading more...
        </div>
      </div>

      <div className="info">
        <HomeSideBar subreddits={subreddits} topSubreddits={topSubreddits} handleSubMembership={handleSubMembership} loginStatus={loginStatus} setLoginModalState={setLoginModalState} handleNavigate={handleNavigate} navToSubmit={navToSubmit} loginModalState={loginModalState} enablePremium={enablePremium}/>
      </div>
    </div>);
}
