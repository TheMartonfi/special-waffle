/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLecture = /* GraphQL */ `
  query GetLecture($id: ID!) {
    getLecture(id: $id) {
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
export const listLectures = /* GraphQL */ `
  query ListLectures(
    $filter: ModelLectureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLectures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        topics {
          nextToken
        }
        quizzes {
          nextToken
        }
        polls {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      lectureId
      endedAt
      createdAt
      updatedAt
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lectureId
        endedAt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
      id
      studentId
      sessionId
      createdAt
      updatedAt
    }
  }
`;
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        sessionId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lectureId
        title
        description
        position
        reactions {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTopicReaction = /* GraphQL */ `
  query GetTopicReaction($id: ID!) {
    getTopicReaction(id: $id) {
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
export const listTopicReactions = /* GraphQL */ `
  query ListTopicReactions(
    $filter: ModelTopicReactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopicReactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTopicResponse = /* GraphQL */ `
  query GetTopicResponse($id: ID!) {
    getTopicResponse(id: $id) {
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
export const listTopicResponses = /* GraphQL */ `
  query ListTopicResponses(
    $filter: ModelTopicResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopicResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
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
export const listQuizs = /* GraphQL */ `
  query ListQuizs(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lectureId
        title
        position
        questions {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuizQuestion = /* GraphQL */ `
  query GetQuizQuestion($id: ID!) {
    getQuizQuestion(id: $id) {
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
export const listQuizQuestions = /* GraphQL */ `
  query ListQuizQuestions(
    $filter: ModelQuizQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quizId
        question
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuizAnswer = /* GraphQL */ `
  query GetQuizAnswer($id: ID!) {
    getQuizAnswer(id: $id) {
      id
      quizQuestionId
      answer
      correct
      createdAt
      updatedAt
    }
  }
`;
export const listQuizAnswers = /* GraphQL */ `
  query ListQuizAnswers(
    $filter: ModelQuizAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getQuizResponse = /* GraphQL */ `
  query GetQuizResponse($id: ID!) {
    getQuizResponse(id: $id) {
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
export const listQuizResponses = /* GraphQL */ `
  query ListQuizResponses(
    $filter: ModelQuizResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
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
export const listPolls = /* GraphQL */ `
  query ListPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lectureId
        question
        position
        choices {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPollChoice = /* GraphQL */ `
  query GetPollChoice($id: ID!) {
    getPollChoice(id: $id) {
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
export const listPollChoices = /* GraphQL */ `
  query ListPollChoices(
    $filter: ModelPollChoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollChoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pollId
        choice
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPollResponse = /* GraphQL */ `
  query GetPollResponse($id: ID!) {
    getPollResponse(id: $id) {
      id
      pollChoiceId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const listPollResponses = /* GraphQL */ `
  query ListPollResponses(
    $filter: ModelPollResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
