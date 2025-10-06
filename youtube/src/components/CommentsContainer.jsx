import React from "react";

const commentsData = [
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [
      {
        name: "Aditya Munjale",
        text: "Hare krsna prabhuji kaise ho prabhuji",
        replies: [],
      },
      {
        name: "Aditya Munjale",
        text: "Hare krsna prabhuji kaise ho prabhuji",
        replies: [],
      },
      {
        name: "Aditya Munjale",
        text: "Hare krsna prabhuji kaise ho prabhuji",
        replies: [],
      },
    ],
  },
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [],
  },
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [],
  },
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [],
  },
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [],
  },
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [],
  },
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [],
  },
  {
    name: "Aditya Munjale",
    text: "Hare krsna prabhuji kaise ho prabhuji",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-3 p-2 bg-white rounded-lg">
      <img
        alt="user"
        className="w-10 h-10 rounded-full"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAACUCAMAAAAK/S0jAAAAclBMVEX///8WFhgAAAD8/PwYGBr5+fkXFhoTExXv7+8JCQwQEBL19fUNDRAaGhwAAAW8vLzi4uLW1tbCwsJ6enpGRkZSUlLp6emmpqZwcHFra2s2NjaxsbEuLi6fn5+Tk5SLi4tcXFzLy8skJCWDg4M8PD4fHx2meU4VAAAON0lEQVR4nO1diZaiuhaFAxjCKJOIiEz6/7/4MoFaMlrB8q7Xu9bt7mthyCY5Y06CovzDP/z3oJEf8qc2/Eutv+L7QTp7p2HY5mHPcTBtY/CabwZ/8rYZhHl6KaNjxnGMykuah4FpT4zaF2LvF+0xOSEPnuGhU3JsC3//1x2cBn3Q7FmbdZklp5sHHrYQUnc7lfzH/lARsjD5/HZKsrI22be+c4SYPBthmZwwYMdC6hiQ5ZArTkkZGl+qBWiX9pfYdRwHqS4ap0LIIFdF5Do3vuzFN78NdUUet4poXymTMTbsd/QKpJLrq/qvu/0KI6wA0I5JhjrB5OF39GIEUIXGfPMfAZ8gZhgD6A993TFWyMHY87CHyV/0H9hB4jd3rjpAHJoPbf0d6P3t+ojvTIR8Y6KC3fM1TqqK2JYsq6okvp5d8in+oRd0wMfa/gouWlDewHrqnEUG6VRFbZHXAbP3BrP/QZ0XbVSdyFBYT9QtuJXBF2g0M43B0Xf3jjkATtWmYWAPXm8HYdpW9KL7V3a6A3FqfrjnD+BPsY4sUKkl5COyw9BUhT/Co4Md+EXVAN7x0WFfByuqH9r9IDRu5ez8CvfJ76oA1zLcL9FLxj4srwDkO72IwTW3ue38NB16033U4HtviBgk+d5e4pYwh8fe58mD9nNV3ET7P3AEqNNOjSPWu2FxMSS+yYbEmO2OpvALTT8B3D0MpGNqOj8eDlAqYeMRS0HIUDpEBftG97sFXLpLDJ8oaWaTkE5sj9eEHx0ZETYW4PGnSay9BW6qvDPP6TdSFyziAfAR9qAwlM+5nBqdIUYhbIpLHEnsRgH9/A0u9Dv7o4uJu+kKW3Mx6Cz90NiQ+9gldLPcddQk1xYIyUhj9Jt5ojou6gxnaX+USnvXP1hv9/wBvzUuYmhaHffaGdpPkSF3OZReb1WYwdbem2G8OaYIqPvQWxqvPHyEDLmHWVq9/wXJaADCcxhmUIe+74d1YE7nLOqkJ2NZpbk9GXoDu3A7X8oCIvTDN6WfGkHeHqv4dD6fT3F1bPPAGGNDPg2i3kV13MLeOhPAqKSNmNrEH24P45rYzI/xGYDGLTSA8QDO8TEf8yBJK4e2959xk25NhpnIm6d3o3IxhwWFTsQ0Id6js3uEQzzPJB2cPqwV89KNjO7dNjeaZCacgGlioouhGHKHuZj4sYqfgppuVmIU56OCYxdAdDPTznAKtraXdsUklFLB1A4MczEjjEcjfowjc5gLtVuYkmFapZoOHH4LTYvA5Z4LkZURUTHY2OljVMQzHwwMSHtUZthjcCHaVvjzXm96rTFmU3zqyU9kyHQS5/iDVKh71HpdGAH5llT2nQpDkJkjDrGWA0wNCmMDkA/OMWo1sy68w81WeWd6IyosiPUlPgxPME3JPTzJQ/TTy4fFn3gVcfcsoNooyCRt5kSg6dzRcVMP3YR2Ljx7C6iQOXoOh4eVeAAN5mQQzrcKmIO4n2G5MtKRIPGQO0Ghg4u8ZFDp0o9yQHz8cRxswkTRWodNZF2HaEzuTXHNAiCnHfIBmPxHYpaRa7YZlvAkhgWSUZnMXWei+89w3FE9te/8THwKt6BiR6J9Bw8qVDo79hWM9/0FUO3HxMHH4plAtIXFDM9d8+VI85qWrqFCWkrHrGEftzrnDQbmcBRqH0bkkQ5LDEulhQJBPDowgQjNEBwP0rn4xIWlAmmhYtB/pR/6s0byGTox/2ONFYi6pjpxxodn9Ltg3iKozLhANvycNGaxV1EhY5yNxo8H0hiiuTdgnqhMOjWRFmomLTcdjSuCZrkS43CasfmqKalr0cVAIjFSlwHvOSSE2ZMctnHU8VwzyXTuPg7GDXSURdgAw7HF29ifuW1Bbj6acTGOa6cY6edxeFGA3iMXGTN8lutidsoWJ+PxurHQE3uEdx7PEZpJZ5tTmVSMpNOQ6fhw72EoKJ6GBaPPnEhMZwUSmSvNe9Gq1UwsxNXrpxjp54Rgm40lnqDMSdZZYYgm1GP+FpdRn4zcp/OaoJTIJRaSAFO5kZUOjGhxXBZIACFa9GI5NDQyVwOesCDuy5TVSldafQp9kosiHBmXPEPFkKCXSRNFN9bF1IXFW+OyqEl6lRQqGpliQqGMuoIU8ucY0TnsIkQmmYwkJk1xW3xNcsoYKNJl/26yyN0tQ5JPVlsqS79BObnIEr7FZSI8IXdjChTpqiPLJ7vA/H0V6baSoXs+cJFDxThyJ2/OL7KbJYmxZ+BmOgQWfiDCI37bWpgxza0gHarp6htjVbAvnnc13UezAjq9kRPLqfzZn1hY4o7G+QJro33GJZ2WaBJrMNPmnOS4Mb5wi2aCVU2pb2uifQp0q2fUk8+fj9XIiZQLUVA45QbyOLpaHe9Xc/GvcFiROmlTF6MFIfrT+VCNZvhXjgvN9k+PSyCEn672/BqaEnHHkmXmJqko++tDCdYsXBVfZ2usugymF0ngotgZV7VziSq2Wr4yP8ZWvidbPYjAG2cy8peHinHRYTCV/YwgWTPLIJnP4puiWgVXMlJ+exF2z6lkCi1tltt+q5lRyBRdAgiP5+Pf4XJZMMrmcXn+wjsusH/2RSaXbgWJF6nNob4unWVwXeIvGiKEkbOq1HNZMCPoGh+dZbNrr3SGDa/x/WwxlcuFZ1YHV35fuZBYcMEin4tYQLmgRWGznI9zYYnuFCZ3WYgZli4r3fk7LpogM+f8Y0Hl8+OyXF5EB/1m0mYiIJ6itqwQULa8rNFj3JkJqhtl86oCdMrkVgWLUxFy9dgq+6KIkTkUCQa6b+x5QFzCBCfFYXlxuFz7ssbuc7BnHlxiBD/XlhxA8SVYU0ot1+6v8ccEWEe1IM1Qvw2Jb1RCWRpo/RVLINcfMxf6yT36fmqHMI+qq0t3v3rutYry8KB1Fyxkc/eTpQT8y+IXBjF3zH73l2bug9D3c98Pg73Zk7DNh6sn0VU/yIlfSFzJn8xpXpPQ/PUhTeIk8w3lXl/WqV/+geFn5Ir0wPPuMwhE4YqUuJI4JbxED03H+wKHy8miRbzoYRNoP6/Yn3WFyAYeOl2WzNmaWyqE5MT7C/MwFEbagCjjBTgOca+PYkvpzoEmnR8XyXkYkR+bUMq8Jl8ziL2/a2Giw7yiNvtlE80w64KogbvJIWx8g390THA6lSwrPybylu543pLvsTiU8BS76C5Rw9fs4tdBENT+JbsSBe0++QIAfBfCKBezAldm3tLI5vLJvHb/OpAbR09HEbw6aRZcx2v8lYd8ciZpKXk2z09L8dLbS6KP/v9O13V1R37I3zv11UXT4ZZO7EKSnedXQizWXy5jZ4soZqHixx3TT9jdt4//HDbyS6wWYwU+mnYR6y9YShUZTXuJdTE4GS/31HiFUqmuLeu5w1HFbpeXtjWDbx4gHtBsIm0ZF025esLCDK1X0kRyuaLMcoCMWw6llbW+RgJ5V2mbLnqBGTBYnMr6FbFHWPogmYd1ZDniQgc/EGINycsdNboLD5zlWeQh6I5HdwL+bFpRRBpUh2BZdmAJhFNEJ9krF/+NdcqfoJWIr1y6Mhx8kkODoe3Guv05MMREuuuXKV+B3Z8bBLTn20pDV5hiNfaLsnljlXIIbB/Cc8t2l5wGmZXwdl9h+1I/lsLvZKWD+7MC46F+LJZab32v6/vR7P72e2HhsG4/XCR7m7q+fhMPuuWPGkVT3qixHAMcH8JrWora1VtK3dLDNiBzLqwOtg8XlZoMy9rF42EgMjC10gegWp9n4NuTJbJRalF7bDX5Q8hrH8e3661ng492/5Q0JReS7zSS65NZPoR1W2wU4+j3K0jBwz6Evggd8fyP1HHpLaLlpr1rZEQyTMsdOOqPmdBStysclVvPT3HI+grbXtsHiWQuj013VmBk/8Cv4PeW69LFeIVEaWEdx53zanTuLBrfvPQLmJ36dbrA6LB6X8Uc+kEI7/uSNjmayD93SlJkMPsNZNLQbQ/r92rhs3xpodBa3O3ja6n4G8X6+v05eAUt6dRa0FmUgfBG+/iU4ErIsL1JLIthRrKnWDelQuB7khC+brO/ki5E9vteac0SoSadC+t8cKb7XummJJzKNi09F+O+HzkxWapXsh5jSWszYWEsEhWMG00yJbh2dp5Mhnx6k/470FXI71PXuW20g5fjXlKJ2w3EhT6jFndPSLKv/xPG8R56ra6uXIJ7zYY7tv9KGg4iwtQli8qdDFGV/LyLeAPn5REkYnEFmY240Iwro+LOlcj+moqm+BjLFvlX6BiPbImVx0V7OoJoO3zsEKJSl5WvGIOll1KS4XNs2Ek2WwkLB8JiD/LGAsPS75F8r/IRXjS5AUomH62vhtgGNML/4CF3W/jIPZXoAwep3anQlTAJ2f0hWFCay0uyfs2F/djlbCXiO8B8h/uHz+uk5ybdzx39LcS5o/ScpU+fCMumQB3T87VkqWdEzwGLa2VrEznEhq5bZaq1YpPINFzSVvYn5/RyMnZxAiTHO9MRnAqzO+7y83QI/MyRoZ13qudk/kO7fwLzMlQHs44IPW/8uqicbFNoilFHt1+yseAWfcEbB+iMMP3s5/n8a6ADznxT+dPZ1XMhkXMezx/SN8YE4vygrKlZ3hiaSc9Bf+t9FklufgmJO2yfjA0rJln4nhHVdciY+NueyPkW6LMN2gaAvoxnwftfkAXQtIHy92IyAP5eHj863TzsIDTKhv7Kwd7tFPlf+16ezl4fwmNybXTs0RcN0cK9/ocOBmGB9eaaHENmTv7CyK9EkJdZFZ8dDzx6gDID+Qd4zjmusjLfNE8sEeL4fvtQ58WlPWZVh+zYXoq8PvD3i339eDA8vfeNv/Yt4C9+e3rv2990bi14Xcbk+/i+8aVi//AP/1f4H2ytwggysiwFAAAAAElFTkSuQmCC"
      />
      <div className="flex-1">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-700 mt-1">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="ml-6 border-l border-gray-200 pl-4">
      {comments.map((comment, index) => (
        <div key={index} className="mb-4">
          <Comment data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <CommentList comments={comment.replies} />
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
