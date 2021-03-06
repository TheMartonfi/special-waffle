/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const createLecture = /* GraphQL */ `
  mutation CreateLecture(
    $input: CreateLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    createLecture(input: $input, condition: $condition) {
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
export const updateLecture = /* GraphQL */ `
  mutation UpdateLecture(
    $input: UpdateLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    updateLecture(input: $input, condition: $condition) {
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
export const deleteLecture = /* GraphQL */ `
  mutation DeleteLecture(
    $input: DeleteLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    deleteLecture(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      lectureId
      endedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      lectureId
      endedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      lectureId
      endedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAttendee = /* GraphQL */ `
  mutation CreateAttendee(
    $input: CreateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    createAttendee(input: $input, condition: $condition) {
      id
      studentId
      sessionId
      createdAt
      updatedAt
    }
  }
`;
export const updateAttendee = /* GraphQL */ `
  mutation UpdateAttendee(
    $input: UpdateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    updateAttendee(input: $input, condition: $condition) {
      id
      studentId
      sessionId
      createdAt
      updatedAt
    }
  }
`;
export const deleteAttendee = /* GraphQL */ `
  mutation DeleteAttendee(
    $input: DeleteAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    deleteAttendee(input: $input, condition: $condition) {
      id
      studentId
      sessionId
      createdAt
      updatedAt
    }
  }
`;
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createTopicReaction = /* GraphQL */ `
  mutation CreateTopicReaction(
    $input: CreateTopicReactionInput!
    $condition: ModelTopicReactionConditionInput
  ) {
    createTopicReaction(input: $input, condition: $condition) {
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
export const updateTopicReaction = /* GraphQL */ `
  mutation UpdateTopicReaction(
    $input: UpdateTopicReactionInput!
    $condition: ModelTopicReactionConditionInput
  ) {
    updateTopicReaction(input: $input, condition: $condition) {
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
export const deleteTopicReaction = /* GraphQL */ `
  mutation DeleteTopicReaction(
    $input: DeleteTopicReactionInput!
    $condition: ModelTopicReactionConditionInput
  ) {
    deleteTopicReaction(input: $input, condition: $condition) {
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
export const createTopicResponse = /* GraphQL */ `
  mutation CreateTopicResponse(
    $input: CreateTopicResponseInput!
    $condition: ModelTopicResponseConditionInput
  ) {
    createTopicResponse(input: $input, condition: $condition) {
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
export const updateTopicResponse = /* GraphQL */ `
  mutation UpdateTopicResponse(
    $input: UpdateTopicResponseInput!
    $condition: ModelTopicResponseConditionInput
  ) {
    updateTopicResponse(input: $input, condition: $condition) {
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
export const deleteTopicResponse = /* GraphQL */ `
  mutation DeleteTopicResponse(
    $input: DeleteTopicResponseInput!
    $condition: ModelTopicResponseConditionInput
  ) {
    deleteTopicResponse(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createQuizQuestion = /* GraphQL */ `
  mutation CreateQuizQuestion(
    $input: CreateQuizQuestionInput!
    $condition: ModelQuizQuestionConditionInput
  ) {
    createQuizQuestion(input: $input, condition: $condition) {
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
export const updateQuizQuestion = /* GraphQL */ `
  mutation UpdateQuizQuestion(
    $input: UpdateQuizQuestionInput!
    $condition: ModelQuizQuestionConditionInput
  ) {
    updateQuizQuestion(input: $input, condition: $condition) {
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
export const deleteQuizQuestion = /* GraphQL */ `
  mutation DeleteQuizQuestion(
    $input: DeleteQuizQuestionInput!
    $condition: ModelQuizQuestionConditionInput
  ) {
    deleteQuizQuestion(input: $input, condition: $condition) {
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
export const createQuizAnswer = /* GraphQL */ `
  mutation CreateQuizAnswer(
    $input: CreateQuizAnswerInput!
    $condition: ModelQuizAnswerConditionInput
  ) {
    createQuizAnswer(input: $input, condition: $condition) {
      id
      quizQuestionId
      answer
      correct
      createdAt
      updatedAt
    }
  }
`;
export const updateQuizAnswer = /* GraphQL */ `
  mutation UpdateQuizAnswer(
    $input: UpdateQuizAnswerInput!
    $condition: ModelQuizAnswerConditionInput
  ) {
    updateQuizAnswer(input: $input, condition: $condition) {
      id
      quizQuestionId
      answer
      correct
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuizAnswer = /* GraphQL */ `
  mutation DeleteQuizAnswer(
    $input: DeleteQuizAnswerInput!
    $condition: ModelQuizAnswerConditionInput
  ) {
    deleteQuizAnswer(input: $input, condition: $condition) {
      id
      quizQuestionId
      answer
      correct
      createdAt
      updatedAt
    }
  }
`;
export const createQuizResponse = /* GraphQL */ `
  mutation CreateQuizResponse(
    $input: CreateQuizResponseInput!
    $condition: ModelQuizResponseConditionInput
  ) {
    createQuizResponse(input: $input, condition: $condition) {
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
export const updateQuizResponse = /* GraphQL */ `
  mutation UpdateQuizResponse(
    $input: UpdateQuizResponseInput!
    $condition: ModelQuizResponseConditionInput
  ) {
    updateQuizResponse(input: $input, condition: $condition) {
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
export const deleteQuizResponse = /* GraphQL */ `
  mutation DeleteQuizResponse(
    $input: DeleteQuizResponseInput!
    $condition: ModelQuizResponseConditionInput
  ) {
    deleteQuizResponse(input: $input, condition: $condition) {
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
export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
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
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $input: UpdatePollInput!
    $condition: ModelPollConditionInput
  ) {
    updatePoll(input: $input, condition: $condition) {
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
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $input: DeletePollInput!
    $condition: ModelPollConditionInput
  ) {
    deletePoll(input: $input, condition: $condition) {
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
export const createPollChoice = /* GraphQL */ `
  mutation CreatePollChoice(
    $input: CreatePollChoiceInput!
    $condition: ModelPollChoiceConditionInput
  ) {
    createPollChoice(input: $input, condition: $condition) {
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
export const updatePollChoice = /* GraphQL */ `
  mutation UpdatePollChoice(
    $input: UpdatePollChoiceInput!
    $condition: ModelPollChoiceConditionInput
  ) {
    updatePollChoice(input: $input, condition: $condition) {
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
export const deletePollChoice = /* GraphQL */ `
  mutation DeletePollChoice(
    $input: DeletePollChoiceInput!
    $condition: ModelPollChoiceConditionInput
  ) {
    deletePollChoice(input: $input, condition: $condition) {
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
export const createPollResponse = /* GraphQL */ `
  mutation CreatePollResponse(
    $input: CreatePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    createPollResponse(input: $input, condition: $condition) {
      id
      pollChoiceId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const updatePollResponse = /* GraphQL */ `
  mutation UpdatePollResponse(
    $input: UpdatePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    updatePollResponse(input: $input, condition: $condition) {
      id
      pollChoiceId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
export const deletePollResponse = /* GraphQL */ `
  mutation DeletePollResponse(
    $input: DeletePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    deletePollResponse(input: $input, condition: $condition) {
      id
      pollChoiceId
      sessionId
      studentId
      createdAt
      updatedAt
    }
  }
`;
