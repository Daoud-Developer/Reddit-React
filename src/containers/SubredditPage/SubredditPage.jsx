// Imports
import React, { useEffect } from 'react';
// Hook Imports
import { useLocation } from 'react-router-dom';
// Component Imports
import CreatePost from '../../components/CreatePost/CreatePost';
import SubredditHeadline from '../../components/SubredditHeadline/SubredditHeadline';
import Grid from '../Grid/Grid';
import SortBar from '../../components/SortBar/SortBar';
import SubredditSideBar from '../../components/SubredditSideBar/SubredditSideBar';
// CSS Imports
import './SubredditPage.scss';
export default function SubredditPage(props) {
    const location = useLocation();
    const { randomIntToString, userName, currentEditedComment, currentSort, currentPost, subreddits, topSubreddits, loginStatus, loginModalState, setLoginModalState, identifyCurrentSub, currentSub, posts, submitPage, currentAnchor, communityOptions, communityTheme, standardTheme, mainComment, writeComment, writeNestedComment, editComment, editNestedComment, setCurrentSub, setIndex, navToUserProfile, savePost, submitNestedComment, navToProfile, handleLikeComment, handleNestedComment, switchCommunityOptions, switchCommunityTheme, openPost, expandRule, handleLike, setSort, handleSubMembership, handleNavigate, navToSubmit, submitComment, selectAnchor } = props;
    useEffect(() => {
        if (currentSub === undefined) {
            const subId = subreddits.findIndex(sub => sub.title === location.pathname.substring(27));
            if (subId === -1) {
                return;
            }
            setCurrentSub(subreddits[subId]);
        }
    }, []);
    return (<div className="subredditPage" style={{ backgroundColor: communityTheme ? currentSub?.backgroundColor : "#edeff1", height: loginModalState === "closed" ? "" : "100vh", overflow: loginModalState === "closed" ? "scroll" : "hidden" }}>
      <img alt="banner" className="subredditBanner" src={communityTheme ? require(`../../resources/images/Communities/${currentSub?.title}/banner.jpg`) : require(`../../resources/images/Communities/todayilearned/banner.jpg`)}/>

      <SubredditHeadline currentSub={currentSub} handleSubMembership={handleSubMembership} selectAnchor={selectAnchor} currentAnchor={currentAnchor} standardTheme={standardTheme} loginStatus={loginStatus} communityTheme={communityTheme}/>

      <div className="subredditContent">
          <div className="feed">
            <CreatePost randomIntToString={randomIntToString} userName={userName} navToSubmit={navToSubmit} loginStatus={loginStatus}/>

            <SortBar currentSort={currentSort} setSort={setSort}/>

            <Grid currentSub={currentSub} currentPost={currentPost} loginModalState={loginModalState} currentSort={currentSort} handleNavigate={handleNavigate} posts={posts} handleLike={handleLike} openPost={openPost} userName={userName} mainComment={mainComment} writeComment={writeComment} submitComment={submitComment} handleLikeComment={handleLikeComment} loginStatus={loginStatus} handleNestedComment={handleNestedComment} setIndex={setIndex} writeNestedComment={writeNestedComment} submitNestedComment={submitNestedComment} currentEditedComment={currentEditedComment} editComment={editComment} editNestedComment={editNestedComment} randomIntToString={randomIntToString} savePost={savePost} navToUserProfile={navToUserProfile} navToProfile={navToProfile}/>

          </div>

          <SubredditSideBar communityTheme={communityTheme} currentSub={currentSub} standardTheme={standardTheme} loginStatus={loginStatus} randomIntToString={randomIntToString} navToSubmit={navToSubmit} switchCommunityTheme={switchCommunityTheme} expandRule={expandRule} userName={userName} switchCommunityOptions={switchCommunityOptions} communityOptions={communityOptions} currentPost={currentPost} handleNavigate={handleNavigate} submitPage={submitPage} navToProfile={navToProfile}/>
      </div>
    </div>);
}
