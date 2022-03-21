import React, { memo } from 'react';
import TweetCard from './TweetCard';

const Tweets = memo(
  ({
    allTweets,
    tweetService,
    allTweetsLength,
    setAllTweetsLength,
    setMyTweetsLength,
  }) => {
    return (
      <div className='tweetsBox'>
        {allTweets?.map((tweet) => {
          return tweet === undefined ? (
            ''
          ) : (
            <>
              <TweetCard
                tweet={tweet}
                allTweetsLength={allTweetsLength}
                setAllTweetsLength={setAllTweetsLength}
                tweetService={tweetService}
                setMyTweetsLength={setMyTweetsLength}
              />
            </>
          );
        })}
      </div>
    );
  }
);

export default Tweets;
