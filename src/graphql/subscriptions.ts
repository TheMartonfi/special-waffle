/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLecture = /* GraphQL */ `
  subscription OnCreateLecture {
    onCreateLecture {
      id
      title
      description
      topics {
        items {
          id
          lectureId
          title
          description
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          lectureId
          title
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      polls {
        items {
          id
          lectureId
          title
          description
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLecture = /* GraphQL */ `
  subscription OnUpdateLecture {
    onUpdateLecture {
      id
      title
      description
      topics {
        items {
          id
          lectureId
          title
          description
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          lectureId
          title
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      polls {
        items {
          id
          lectureId
          title
          description
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLecture = /* GraphQL */ `
  subscription OnDeleteLecture {
    onDeleteLecture {
      id
      title
      description
      topics {
        items {
          id
          lectureId
          title
          description
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          lectureId
          title
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      polls {
        items {
          id
          lectureId
          title
          description
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
      id
      lectureId
      endedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
      id
      lectureId
      endedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
      id
      lectureId
      endedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee {
    onCreateAttendee {
      id
      studentId
      sessionId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee {
    onUpdateAttendee {
      id
      studentId
      sessionId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee {
    onDeleteAttendee {
      id
      studentId
      sessionId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
      id
      lectureId
      title
      description
      position
      reactions {
        items {
          id
          topicId
          sessionId
          studentId
          reaction
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          topicId
          sessionId
          studentId
          type
          response
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
      id
      lectureId
      title
      description
      position
      reactions {
        items {
          id
          topicId
          sessionId
          studentId
          reaction
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          topicId
          sessionId
          studentId
          type
          response
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
      id
      lectureId
      title
      description
      position
      reactions {
        items {
          id
          topicId
          sessionId
          studentId
          reaction
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          topicId
          sessionId
          studentId
          type
          response
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTopicReaction = /* GraphQL */ `
  subscription OnCreateTopicReaction {
    onCreateTopicReaction {
      id
      topicId
      sessionId
      studentId
      reaction
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTopicReaction = /* GraphQL */ `
  subscription OnUpdateTopicReaction {
    onUpdateTopicReaction {
      id
      topicId
      sessionId
      studentId
      reaction
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTopicReaction = /* GraphQL */ `
  subscription OnDeleteTopicReaction {
    onDeleteTopicReaction {
      id
      topicId
      sessionId
      studentId
      reaction
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTopicResponse = /* GraphQL */ `
  subscription OnCreateTopicResponse {
    onCreateTopicResponse {
      id
      topicId
      sessionId
      studentId
      type
      response
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTopicResponse = /* GraphQL */ `
  subscription OnUpdateTopicResponse {
    onUpdateTopicResponse {
      id
      topicId
      sessionId
      studentId
      type
      response
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTopicResponse = /* GraphQL */ `
  subscription OnDeleteTopicResponse {
    onDeleteTopicResponse {
      id
      topicId
      sessionId
      studentId
      type
      response
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
      id
      lectureId
      title
      position
      questions {
        items {
          id
          quizId
          question
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          quizId
          quizAnswerId
          sessionId
          studentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
      id
      lectureId
      title
      position
      questions {
        items {
          id
          quizId
          question
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          quizId
          quizAnswerId
          sessionId
          studentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
      id
      lectureId
      title
      position
      questions {
        items {
          id
          quizId
          question
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          quizId
          quizAnswerId
          sessionId
          studentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuizQuestion = /* GraphQL */ `
  subscription OnCreateQuizQuestion {
    onCreateQuizQuestion {
      id
      quizId
      question
      answers {
        items {
          id
          quizQuestionId
          answer
          correct
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuizQuestion = /* GraphQL */ `
  subscription OnUpdateQuizQuestion {
    onUpdateQuizQuestion {
      id
      quizId
      question
      answers {
        items {
          id
          quizQuestionId
          answer
          correct
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuizQuestion = /* GraphQL */ `
  subscription OnDeleteQuizQuestion {
    onDeleteQuizQuestion {
      id
      quizId
      question
      answers {
        items {
          id
          quizQuestionId
          answer
          correct
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuizAnswer = /* GraphQL */ `
  subscription OnCreateQuizAnswer {
    onCreateQuizAnswer {
      id
      quizQuestionId
      answer
      correct
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuizAnswer = /* GraphQL */ `
  subscription OnUpdateQuizAnswer {
    onUpdateQuizAnswer {
      id
      quizQuestionId
      answer
      correct
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuizAnswer = /* GraphQL */ `
  subscription OnDeleteQuizAnswer {
    onDeleteQuizAnswer {
      id
      quizQuestionId
      answer
      correct
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuizResponse = /* GraphQL */ `
  subscription OnCreateQuizResponse {
    onCreateQuizResponse {
      id
      quizId
      quizAnswerId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuizResponse = /* GraphQL */ `
  subscription OnUpdateQuizResponse {
    onUpdateQuizResponse {
      id
      quizId
      quizAnswerId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuizResponse = /* GraphQL */ `
  subscription OnDeleteQuizResponse {
    onDeleteQuizResponse {
      id
      quizId
      quizAnswerId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
      id
      lectureId
      question
      position
      choices {
        items {
          id
          pollId
          choice
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
      id
      lectureId
      question
      position
      choices {
        items {
          id
          pollId
          choice
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
      id
      lectureId
      question
      position
      choices {
        items {
          id
          pollId
          choice
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePollChoice = /* GraphQL */ `
  subscription OnCreatePollChoice {
    onCreatePollChoice {
      id
      pollId
      choice
      responses {
        items {
          id
          pollChoiceId
          sessionId
          studentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePollChoice = /* GraphQL */ `
  subscription OnUpdatePollChoice {
    onUpdatePollChoice {
      id
      pollId
      choice
      responses {
        items {
          id
          pollChoiceId
          sessionId
          studentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePollChoice = /* GraphQL */ `
  subscription OnDeletePollChoice {
    onDeletePollChoice {
      id
      pollId
      choice
      responses {
        items {
          id
          pollChoiceId
          sessionId
          studentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePollResponse = /* GraphQL */ `
  subscription OnCreatePollResponse {
    onCreatePollResponse {
      id
      pollChoiceId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePollResponse = /* GraphQL */ `
  subscription OnUpdatePollResponse {
    onUpdatePollResponse {
      id
      pollChoiceId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePollResponse = /* GraphQL */ `
  subscription OnDeletePollResponse {
    onDeletePollResponse {
      id
      pollChoiceId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
