// Imports
import React from 'react';
// Component Imports
import GridPost from '../../components/GridPost/GridPost';
// Utility Imports
import bestOrder from '../../utils/bestOrder';
import hotOrder from '../../utils/hotOrder';
import newOrder from '../../utils/newOrder';
import postArray from '../../utils/postArray';
import topOrder from '../../utils/topOrder';
// CSS Imports
import './Grid.scss';
export default function Grid(props) {
    const { currentSub, currentPost, currentSort, loginModalState, userName, currentEditedComment, posts, renderNum, loginStatus, mainComment, writeComment, writeNestedComment, editComment, editNestedComment, randomIntToString, setIndex, navToProfile, navToUserProfile, savePost, submitNestedComment, openPost, handleLikeComment, handleNestedComment, submitComment, handleNavigate, handleLike } = props;
    return (<div className="grid">
      {currentSub === undefined && currentSort === "best" && bestOrder.map((num, i) => {
            if (loginModalState !== "closed" && i >= 3) {
                return;
            }
            if (i > renderNum) {
                return;
            }
            return <GridPost post={posts[num + 1]} posts={posts} currentSub={currentSub} currentPost={currentPost} handleNavigate={handleNavigate} handleLike={handleLike} openPost={openPost} userName={userName} mainComment={mainComment} writeComment={writeComment} submitComment={submitComment} handleLikeComment={handleLikeComment} loginStatus={loginStatus} handleNestedComment={handleNestedComment} setIndex={setIndex} writeNestedComment={writeNestedComment} submitNestedComment={submitNestedComment} currentEditedComment={currentEditedComment} editComment={editComment} editNestedComment={editNestedComment} randomIntToString={randomIntToString} savePost={savePost} navToUserProfile={navToUserProfile} navToProfile={navToProfile}/>;
        })}

      {currentSub === undefined && currentSort === "new" && newOrder.map((num, i) => {
            if (loginModalState !== "closed" && i >= 3) {
                return;
            }
            if (i > renderNum) {
                return;
            }
            return <GridPost post={posts[num]} posts={posts} currentSub={currentSub} currentPost={currentPost} handleNavigate={handleNavigate} handleLike={handleLike} openPost={openPost} userName={userName} mainComment={mainComment} writeComment={writeComment} submitComment={submitComment} handleLikeComment={handleLikeComment} loginStatus={loginStatus} handleNestedComment={handleNestedComment} setIndex={setIndex} writeNestedComment={writeNestedComment} submitNestedComment={submitNestedComment} currentEditedComment={currentEditedComment} editComment={editComment} editNestedComment={editNestedComment} randomIntToString={randomIntToString} savePost={savePost} navToUserProfile={navToUserProfile} navToProfile={navToProfile}/>;
        })}

      {currentSub === undefined && currentSort === "top" && topOrder.map((num, i) => {
            if (loginModalState !== "closed" && i >= 3) {
                return;
            }
            if (i > renderNum) {
                return;
            }
            return <GridPost post={posts[num]} posts={posts} currentSub={currentSub} currentPost={currentPost} handleNavigate={handleNavigate} handleLike={handleLike} openPost={openPost} userName={userName} mainComment={mainComment} writeComment={writeComment} submitComment={submitComment} handleLikeComment={handleLikeComment} loginStatus={loginStatus} handleNestedComment={handleNestedComment} setIndex={setIndex} writeNestedComment={writeNestedComment} submitNestedComment={submitNestedComment} currentEditedComment={currentEditedComment} editComment={editComment} editNestedComment={editNestedComment} randomIntToString={randomIntToString} savePost={savePost} navToUserProfile={navToUserProfile} navToProfile={navToProfile}/>;
        })}

      {currentSub === undefined && currentSort === "hot" && hotOrder.map((num, i) => {
            if (loginModalState !== "closed" && i >= 3) {
                return;
            }
            if (i > renderNum) {
                return;
            }
            return <GridPost post={posts[num]} posts={posts} currentSub={currentSub} currentPost={currentPost} handleNavigate={handleNavigate} handleLike={handleLike} openPost={openPost} userName={userName} mainComment={mainComment} writeComment={writeComment} submitComment={submitComment} handleLikeComment={handleLikeComment} loginStatus={loginStatus} handleNestedComment={handleNestedComment} setIndex={setIndex} writeNestedComment={writeNestedComment} submitNestedComment={submitNestedComment} currentEditedComment={currentEditedComment} editComment={editComment} editNestedComment={editNestedComment} randomIntToString={randomIntToString} savePost={savePost} navToUserProfile={navToUserProfile} navToProfile={navToProfile}/>;
        })}

      {currentSub !== undefined && postArray.map((post, i) => {
            if (post.subreddit !== currentSub.title) {
                return;
            }
            return <GridPost post={posts[i]} posts={posts} currentSub={currentSub} currentPost={currentPost} handleNavigate={handleNavigate} handleLike={handleLike} openPost={openPost} userName={userName} mainComment={mainComment} writeComment={writeComment} submitComment={submitComment} handleLikeComment={handleLikeComment} loginStatus={loginStatus} handleNestedComment={handleNestedComment} setIndex={setIndex} writeNestedComment={writeNestedComment} submitNestedComment={submitNestedComment} currentEditedComment={currentEditedComment} editComment={editComment} editNestedComment={editNestedComment} randomIntToString={randomIntToString} savePost={savePost} navToUserProfile={navToUserProfile} navToProfile={navToProfile}/>;
        })}
    </div>);
}
