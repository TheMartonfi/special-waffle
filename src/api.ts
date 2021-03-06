/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateLectureInput = {
  id?: string | null,
  lecturerId: string,
  title: string,
  description?: string | null,
};

export type ModelLectureConditionInput = {
  lecturerId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLectureConditionInput | null > | null,
  or?: Array< ModelLectureConditionInput | null > | null,
  not?: ModelLectureConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Lecture = {
  __typename: "Lecture",
  id?: string,
  lecturerId?: string,
  title?: string,
  description?: string | null,
  topics?: ModelTopicConnection,
  quizzes?: ModelQuizConnection,
  polls?: ModelTopicConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection",
  items?:  Array<Topic | null > | null,
  nextToken?: string | null,
};

export type Topic = {
  __typename: "Topic",
  id?: string,
  lectureId?: string,
  title?: string,
  description?: string | null,
  position?: number | null,
  reactions?: ModelTopicReactionConnection,
  responses?: ModelTopicResponseConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTopicReactionConnection = {
  __typename: "ModelTopicReactionConnection",
  items?:  Array<TopicReaction | null > | null,
  nextToken?: string | null,
};

export type TopicReaction = {
  __typename: "TopicReaction",
  id?: string,
  topicId?: string,
  sessionId?: string,
  studentId?: string,
  reaction?: boolean,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTopicResponseConnection = {
  __typename: "ModelTopicResponseConnection",
  items?:  Array<TopicResponse | null > | null,
  nextToken?: string | null,
};

export type TopicResponse = {
  __typename: "TopicResponse",
  id?: string,
  topicId?: string,
  sessionId?: string,
  studentId?: string,
  type?: TopicResponseType,
  response?: string,
  createdAt?: string,
  updatedAt?: string,
};

export enum TopicResponseType {
  question = "question",
  answer = "answer",
  comment = "comment",
}


export type ModelQuizConnection = {
  __typename: "ModelQuizConnection",
  items?:  Array<Quiz | null > | null,
  nextToken?: string | null,
};

export type Quiz = {
  __typename: "Quiz",
  id?: string,
  lectureId?: string,
  title?: string,
  position?: number | null,
  questions?: ModelQuizQuestionConnection,
  responses?: ModelQuizResponseConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelQuizQuestionConnection = {
  __typename: "ModelQuizQuestionConnection",
  items?:  Array<QuizQuestion | null > | null,
  nextToken?: string | null,
};

export type QuizQuestion = {
  __typename: "QuizQuestion",
  id?: string,
  quizId?: string,
  question?: string,
  answers?: ModelQuizAnswerConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelQuizAnswerConnection = {
  __typename: "ModelQuizAnswerConnection",
  items?:  Array<QuizAnswer | null > | null,
  nextToken?: string | null,
};

export type QuizAnswer = {
  __typename: "QuizAnswer",
  id?: string,
  quizQuestionId?: string,
  answer?: string,
  correct?: boolean,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelQuizResponseConnection = {
  __typename: "ModelQuizResponseConnection",
  items?:  Array<QuizResponse | null > | null,
  nextToken?: string | null,
};

export type QuizResponse = {
  __typename: "QuizResponse",
  id?: string,
  quizId?: string,
  quizAnswerId?: string,
  sessionId?: string,
  studentId?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateLectureInput = {
  id: string,
  lecturerId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeleteLectureInput = {
  id?: string | null,
};

export type CreateSessionInput = {
  id?: string | null,
  lectureId: string,
  endedAt?: string | null,
};

export type ModelSessionConditionInput = {
  lectureId?: ModelIDInput | null,
  endedAt?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
};

export type Session = {
  __typename: "Session",
  id?: string,
  lectureId?: string,
  endedAt?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateSessionInput = {
  id: string,
  lectureId?: string | null,
  endedAt?: string | null,
};

export type DeleteSessionInput = {
  id?: string | null,
};

export type CreateAttendeeInput = {
  id?: string | null,
  studentId: string,
  sessionId: string,
};

export type ModelAttendeeConditionInput = {
  studentId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  and?: Array< ModelAttendeeConditionInput | null > | null,
  or?: Array< ModelAttendeeConditionInput | null > | null,
  not?: ModelAttendeeConditionInput | null,
};

export type Attendee = {
  __typename: "Attendee",
  id?: string,
  studentId?: string,
  sessionId?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateAttendeeInput = {
  id: string,
  studentId?: string | null,
  sessionId?: string | null,
};

export type DeleteAttendeeInput = {
  id?: string | null,
};

export type CreateTopicInput = {
  id?: string | null,
  lectureId: string,
  title: string,
  description?: string | null,
  position?: number | null,
};

export type ModelTopicConditionInput = {
  lectureId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTopicInput = {
  id: string,
  lectureId?: string | null,
  title?: string | null,
  description?: string | null,
  position?: number | null,
};

export type DeleteTopicInput = {
  id?: string | null,
};

export type CreateTopicReactionInput = {
  id?: string | null,
  topicId: string,
  sessionId: string,
  studentId: string,
  reaction: boolean,
};

export type ModelTopicReactionConditionInput = {
  topicId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  reaction?: ModelBooleanInput | null,
  and?: Array< ModelTopicReactionConditionInput | null > | null,
  or?: Array< ModelTopicReactionConditionInput | null > | null,
  not?: ModelTopicReactionConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTopicReactionInput = {
  id: string,
  topicId?: string | null,
  sessionId?: string | null,
  studentId?: string | null,
  reaction?: boolean | null,
};

export type DeleteTopicReactionInput = {
  id?: string | null,
};

export type CreateTopicResponseInput = {
  id?: string | null,
  topicId: string,
  sessionId: string,
  studentId: string,
  type: TopicResponseType,
  response: string,
};

export type ModelTopicResponseConditionInput = {
  topicId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  type?: ModelTopicResponseTypeInput | null,
  response?: ModelStringInput | null,
  and?: Array< ModelTopicResponseConditionInput | null > | null,
  or?: Array< ModelTopicResponseConditionInput | null > | null,
  not?: ModelTopicResponseConditionInput | null,
};

export type ModelTopicResponseTypeInput = {
  eq?: TopicResponseType | null,
  ne?: TopicResponseType | null,
};

export type UpdateTopicResponseInput = {
  id: string,
  topicId?: string | null,
  sessionId?: string | null,
  studentId?: string | null,
  type?: TopicResponseType | null,
  response?: string | null,
};

export type DeleteTopicResponseInput = {
  id?: string | null,
};

export type CreateQuizInput = {
  id?: string | null,
  lectureId: string,
  title: string,
  position?: number | null,
};

export type ModelQuizConditionInput = {
  lectureId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelQuizConditionInput | null > | null,
  or?: Array< ModelQuizConditionInput | null > | null,
  not?: ModelQuizConditionInput | null,
};

export type UpdateQuizInput = {
  id: string,
  lectureId?: string | null,
  title?: string | null,
  position?: number | null,
};

export type DeleteQuizInput = {
  id?: string | null,
};

export type CreateQuizQuestionInput = {
  id?: string | null,
  quizId: string,
  question: string,
};

export type ModelQuizQuestionConditionInput = {
  quizId?: ModelIDInput | null,
  question?: ModelStringInput | null,
  and?: Array< ModelQuizQuestionConditionInput | null > | null,
  or?: Array< ModelQuizQuestionConditionInput | null > | null,
  not?: ModelQuizQuestionConditionInput | null,
};

export type UpdateQuizQuestionInput = {
  id: string,
  quizId?: string | null,
  question?: string | null,
};

export type DeleteQuizQuestionInput = {
  id?: string | null,
};

export type CreateQuizAnswerInput = {
  id?: string | null,
  quizQuestionId: string,
  answer: string,
  correct: boolean,
};

export type ModelQuizAnswerConditionInput = {
  quizQuestionId?: ModelIDInput | null,
  answer?: ModelStringInput | null,
  correct?: ModelBooleanInput | null,
  and?: Array< ModelQuizAnswerConditionInput | null > | null,
  or?: Array< ModelQuizAnswerConditionInput | null > | null,
  not?: ModelQuizAnswerConditionInput | null,
};

export type UpdateQuizAnswerInput = {
  id: string,
  quizQuestionId?: string | null,
  answer?: string | null,
  correct?: boolean | null,
};

export type DeleteQuizAnswerInput = {
  id?: string | null,
};

export type CreateQuizResponseInput = {
  id?: string | null,
  quizId: string,
  quizAnswerId: string,
  sessionId: string,
  studentId: string,
};

export type ModelQuizResponseConditionInput = {
  quizId?: ModelIDInput | null,
  quizAnswerId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  and?: Array< ModelQuizResponseConditionInput | null > | null,
  or?: Array< ModelQuizResponseConditionInput | null > | null,
  not?: ModelQuizResponseConditionInput | null,
};

export type UpdateQuizResponseInput = {
  id: string,
  quizId?: string | null,
  quizAnswerId?: string | null,
  sessionId?: string | null,
  studentId?: string | null,
};

export type DeleteQuizResponseInput = {
  id?: string | null,
};

export type CreatePollInput = {
  id?: string | null,
  lectureId: string,
  question: string,
  position?: number | null,
};

export type ModelPollConditionInput = {
  lectureId?: ModelIDInput | null,
  question?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelPollConditionInput | null > | null,
  or?: Array< ModelPollConditionInput | null > | null,
  not?: ModelPollConditionInput | null,
};

export type Poll = {
  __typename: "Poll",
  id?: string,
  lectureId?: string,
  question?: string,
  position?: number | null,
  choices?: ModelPollChoiceConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelPollChoiceConnection = {
  __typename: "ModelPollChoiceConnection",
  items?:  Array<PollChoice | null > | null,
  nextToken?: string | null,
};

export type PollChoice = {
  __typename: "PollChoice",
  id?: string,
  pollId?: string,
  choice?: string,
  responses?: ModelPollResponseConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelPollResponseConnection = {
  __typename: "ModelPollResponseConnection",
  items?:  Array<PollResponse | null > | null,
  nextToken?: string | null,
};

export type PollResponse = {
  __typename: "PollResponse",
  id?: string,
  pollChoiceId?: string,
  sessionId?: string,
  studentId?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdatePollInput = {
  id: string,
  lectureId?: string | null,
  question?: string | null,
  position?: number | null,
};

export type DeletePollInput = {
  id?: string | null,
};

export type CreatePollChoiceInput = {
  id?: string | null,
  pollId: string,
  choice: string,
};

export type ModelPollChoiceConditionInput = {
  pollId?: ModelIDInput | null,
  choice?: ModelStringInput | null,
  and?: Array< ModelPollChoiceConditionInput | null > | null,
  or?: Array< ModelPollChoiceConditionInput | null > | null,
  not?: ModelPollChoiceConditionInput | null,
};

export type UpdatePollChoiceInput = {
  id: string,
  pollId?: string | null,
  choice?: string | null,
};

export type DeletePollChoiceInput = {
  id?: string | null,
};

export type CreatePollResponseInput = {
  id?: string | null,
  pollChoiceId: string,
  sessionId: string,
  studentId: string,
};

export type ModelPollResponseConditionInput = {
  pollChoiceId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  and?: Array< ModelPollResponseConditionInput | null > | null,
  or?: Array< ModelPollResponseConditionInput | null > | null,
  not?: ModelPollResponseConditionInput | null,
};

export type UpdatePollResponseInput = {
  id: string,
  pollChoiceId?: string | null,
  sessionId?: string | null,
  studentId?: string | null,
};

export type DeletePollResponseInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelLectureFilterInput = {
  id?: ModelIDInput | null,
  lecturerId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLectureFilterInput | null > | null,
  or?: Array< ModelLectureFilterInput | null > | null,
  not?: ModelLectureFilterInput | null,
};

export type ModelLectureConnection = {
  __typename: "ModelLectureConnection",
  items?:  Array<Lecture | null > | null,
  nextToken?: string | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  lectureId?: ModelIDInput | null,
  endedAt?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items?:  Array<Session | null > | null,
  nextToken?: string | null,
};

export type ModelAttendeeFilterInput = {
  id?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  and?: Array< ModelAttendeeFilterInput | null > | null,
  or?: Array< ModelAttendeeFilterInput | null > | null,
  not?: ModelAttendeeFilterInput | null,
};

export type ModelAttendeeConnection = {
  __typename: "ModelAttendeeConnection",
  items?:  Array<Attendee | null > | null,
  nextToken?: string | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  lectureId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelTopicReactionFilterInput = {
  id?: ModelIDInput | null,
  topicId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  reaction?: ModelBooleanInput | null,
  and?: Array< ModelTopicReactionFilterInput | null > | null,
  or?: Array< ModelTopicReactionFilterInput | null > | null,
  not?: ModelTopicReactionFilterInput | null,
};

export type ModelTopicResponseFilterInput = {
  id?: ModelIDInput | null,
  topicId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  type?: ModelTopicResponseTypeInput | null,
  response?: ModelStringInput | null,
  and?: Array< ModelTopicResponseFilterInput | null > | null,
  or?: Array< ModelTopicResponseFilterInput | null > | null,
  not?: ModelTopicResponseFilterInput | null,
};

export type ModelQuizFilterInput = {
  id?: ModelIDInput | null,
  lectureId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelQuizFilterInput | null > | null,
  or?: Array< ModelQuizFilterInput | null > | null,
  not?: ModelQuizFilterInput | null,
};

export type ModelQuizQuestionFilterInput = {
  id?: ModelIDInput | null,
  quizId?: ModelIDInput | null,
  question?: ModelStringInput | null,
  and?: Array< ModelQuizQuestionFilterInput | null > | null,
  or?: Array< ModelQuizQuestionFilterInput | null > | null,
  not?: ModelQuizQuestionFilterInput | null,
};

export type ModelQuizAnswerFilterInput = {
  id?: ModelIDInput | null,
  quizQuestionId?: ModelIDInput | null,
  answer?: ModelStringInput | null,
  correct?: ModelBooleanInput | null,
  and?: Array< ModelQuizAnswerFilterInput | null > | null,
  or?: Array< ModelQuizAnswerFilterInput | null > | null,
  not?: ModelQuizAnswerFilterInput | null,
};

export type ModelQuizResponseFilterInput = {
  id?: ModelIDInput | null,
  quizId?: ModelIDInput | null,
  quizAnswerId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  and?: Array< ModelQuizResponseFilterInput | null > | null,
  or?: Array< ModelQuizResponseFilterInput | null > | null,
  not?: ModelQuizResponseFilterInput | null,
};

export type ModelPollFilterInput = {
  id?: ModelIDInput | null,
  lectureId?: ModelIDInput | null,
  question?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelPollFilterInput | null > | null,
  or?: Array< ModelPollFilterInput | null > | null,
  not?: ModelPollFilterInput | null,
};

export type ModelPollConnection = {
  __typename: "ModelPollConnection",
  items?:  Array<Poll | null > | null,
  nextToken?: string | null,
};

export type ModelPollChoiceFilterInput = {
  id?: ModelIDInput | null,
  pollId?: ModelIDInput | null,
  choice?: ModelStringInput | null,
  and?: Array< ModelPollChoiceFilterInput | null > | null,
  or?: Array< ModelPollChoiceFilterInput | null > | null,
  not?: ModelPollChoiceFilterInput | null,
};

export type ModelPollResponseFilterInput = {
  id?: ModelIDInput | null,
  pollChoiceId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  and?: Array< ModelPollResponseFilterInput | null > | null,
  or?: Array< ModelPollResponseFilterInput | null > | null,
  not?: ModelPollResponseFilterInput | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLectureMutationVariables = {
  input?: CreateLectureInput,
  condition?: ModelLectureConditionInput | null,
};

export type CreateLectureMutation = {
  createLecture?:  {
    __typename: "Lecture",
    id: string,
    title: string,
    description?: string | null,
    topics?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    quizzes?:  {
      __typename: "ModelQuizConnection",
      items?:  Array< {
        __typename: "Quiz",
        id: string,
        lectureId: string,
        title: string,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    polls?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLectureMutationVariables = {
  input?: UpdateLectureInput,
  condition?: ModelLectureConditionInput | null,
};

export type UpdateLectureMutation = {
  updateLecture?:  {
    __typename: "Lecture",
    id: string,
    title: string,
    description?: string | null,
    topics?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    quizzes?:  {
      __typename: "ModelQuizConnection",
      items?:  Array< {
        __typename: "Quiz",
        id: string,
        lectureId: string,
        title: string,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    polls?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLectureMutationVariables = {
  input?: DeleteLectureInput,
  condition?: ModelLectureConditionInput | null,
};

export type DeleteLectureMutation = {
  deleteLecture?:  {
    __typename: "Lecture",
    id: string,
    title: string,
    description?: string | null,
    topics?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    quizzes?:  {
      __typename: "ModelQuizConnection",
      items?:  Array< {
        __typename: "Quiz",
        id: string,
        lectureId: string,
        title: string,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    polls?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSessionMutationVariables = {
  input?: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    lectureId: string,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input?: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    lectureId: string,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input?: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    lectureId: string,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttendeeMutationVariables = {
  input?: CreateAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type CreateAttendeeMutation = {
  createAttendee?:  {
    __typename: "Attendee",
    id: string,
    studentId: string,
    sessionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttendeeMutationVariables = {
  input?: UpdateAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type UpdateAttendeeMutation = {
  updateAttendee?:  {
    __typename: "Attendee",
    id: string,
    studentId: string,
    sessionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttendeeMutationVariables = {
  input?: DeleteAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type DeleteAttendeeMutation = {
  deleteAttendee?:  {
    __typename: "Attendee",
    id: string,
    studentId: string,
    sessionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTopicMutationVariables = {
  input?: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic?:  {
    __typename: "Topic",
    id: string,
    lectureId: string,
    title: string,
    description?: string | null,
    position?: number | null,
    reactions?:  {
      __typename: "ModelTopicReactionConnection",
      items?:  Array< {
        __typename: "TopicReaction",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        reaction: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelTopicResponseConnection",
      items?:  Array< {
        __typename: "TopicResponse",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        type: TopicResponseType,
        response: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input?: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic?:  {
    __typename: "Topic",
    id: string,
    lectureId: string,
    title: string,
    description?: string | null,
    position?: number | null,
    reactions?:  {
      __typename: "ModelTopicReactionConnection",
      items?:  Array< {
        __typename: "TopicReaction",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        reaction: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelTopicResponseConnection",
      items?:  Array< {
        __typename: "TopicResponse",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        type: TopicResponseType,
        response: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input?: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic?:  {
    __typename: "Topic",
    id: string,
    lectureId: string,
    title: string,
    description?: string | null,
    position?: number | null,
    reactions?:  {
      __typename: "ModelTopicReactionConnection",
      items?:  Array< {
        __typename: "TopicReaction",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        reaction: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelTopicResponseConnection",
      items?:  Array< {
        __typename: "TopicResponse",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        type: TopicResponseType,
        response: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTopicReactionMutationVariables = {
  input?: CreateTopicReactionInput,
  condition?: ModelTopicReactionConditionInput | null,
};

export type CreateTopicReactionMutation = {
  createTopicReaction?:  {
    __typename: "TopicReaction",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    reaction: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicReactionMutationVariables = {
  input?: UpdateTopicReactionInput,
  condition?: ModelTopicReactionConditionInput | null,
};

export type UpdateTopicReactionMutation = {
  updateTopicReaction?:  {
    __typename: "TopicReaction",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    reaction: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicReactionMutationVariables = {
  input?: DeleteTopicReactionInput,
  condition?: ModelTopicReactionConditionInput | null,
};

export type DeleteTopicReactionMutation = {
  deleteTopicReaction?:  {
    __typename: "TopicReaction",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    reaction: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTopicResponseMutationVariables = {
  input?: CreateTopicResponseInput,
  condition?: ModelTopicResponseConditionInput | null,
};

export type CreateTopicResponseMutation = {
  createTopicResponse?:  {
    __typename: "TopicResponse",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    type: TopicResponseType,
    response: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicResponseMutationVariables = {
  input?: UpdateTopicResponseInput,
  condition?: ModelTopicResponseConditionInput | null,
};

export type UpdateTopicResponseMutation = {
  updateTopicResponse?:  {
    __typename: "TopicResponse",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    type: TopicResponseType,
    response: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicResponseMutationVariables = {
  input?: DeleteTopicResponseInput,
  condition?: ModelTopicResponseConditionInput | null,
};

export type DeleteTopicResponseMutation = {
  deleteTopicResponse?:  {
    __typename: "TopicResponse",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    type: TopicResponseType,
    response: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuizMutationVariables = {
  input?: CreateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type CreateQuizMutation = {
  createQuiz?:  {
    __typename: "Quiz",
    id: string,
    lectureId: string,
    title: string,
    position?: number | null,
    questions?:  {
      __typename: "ModelQuizQuestionConnection",
      items?:  Array< {
        __typename: "QuizQuestion",
        id: string,
        quizId: string,
        question: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelQuizResponseConnection",
      items?:  Array< {
        __typename: "QuizResponse",
        id: string,
        quizId: string,
        quizAnswerId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuizMutationVariables = {
  input?: UpdateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type UpdateQuizMutation = {
  updateQuiz?:  {
    __typename: "Quiz",
    id: string,
    lectureId: string,
    title: string,
    position?: number | null,
    questions?:  {
      __typename: "ModelQuizQuestionConnection",
      items?:  Array< {
        __typename: "QuizQuestion",
        id: string,
        quizId: string,
        question: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelQuizResponseConnection",
      items?:  Array< {
        __typename: "QuizResponse",
        id: string,
        quizId: string,
        quizAnswerId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuizMutationVariables = {
  input?: DeleteQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type DeleteQuizMutation = {
  deleteQuiz?:  {
    __typename: "Quiz",
    id: string,
    lectureId: string,
    title: string,
    position?: number | null,
    questions?:  {
      __typename: "ModelQuizQuestionConnection",
      items?:  Array< {
        __typename: "QuizQuestion",
        id: string,
        quizId: string,
        question: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelQuizResponseConnection",
      items?:  Array< {
        __typename: "QuizResponse",
        id: string,
        quizId: string,
        quizAnswerId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuizQuestionMutationVariables = {
  input?: CreateQuizQuestionInput,
  condition?: ModelQuizQuestionConditionInput | null,
};

export type CreateQuizQuestionMutation = {
  createQuizQuestion?:  {
    __typename: "QuizQuestion",
    id: string,
    quizId: string,
    question: string,
    answers?:  {
      __typename: "ModelQuizAnswerConnection",
      items?:  Array< {
        __typename: "QuizAnswer",
        id: string,
        quizQuestionId: string,
        answer: string,
        correct: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuizQuestionMutationVariables = {
  input?: UpdateQuizQuestionInput,
  condition?: ModelQuizQuestionConditionInput | null,
};

export type UpdateQuizQuestionMutation = {
  updateQuizQuestion?:  {
    __typename: "QuizQuestion",
    id: string,
    quizId: string,
    question: string,
    answers?:  {
      __typename: "ModelQuizAnswerConnection",
      items?:  Array< {
        __typename: "QuizAnswer",
        id: string,
        quizQuestionId: string,
        answer: string,
        correct: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuizQuestionMutationVariables = {
  input?: DeleteQuizQuestionInput,
  condition?: ModelQuizQuestionConditionInput | null,
};

export type DeleteQuizQuestionMutation = {
  deleteQuizQuestion?:  {
    __typename: "QuizQuestion",
    id: string,
    quizId: string,
    question: string,
    answers?:  {
      __typename: "ModelQuizAnswerConnection",
      items?:  Array< {
        __typename: "QuizAnswer",
        id: string,
        quizQuestionId: string,
        answer: string,
        correct: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuizAnswerMutationVariables = {
  input?: CreateQuizAnswerInput,
  condition?: ModelQuizAnswerConditionInput | null,
};

export type CreateQuizAnswerMutation = {
  createQuizAnswer?:  {
    __typename: "QuizAnswer",
    id: string,
    quizQuestionId: string,
    answer: string,
    correct: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuizAnswerMutationVariables = {
  input?: UpdateQuizAnswerInput,
  condition?: ModelQuizAnswerConditionInput | null,
};

export type UpdateQuizAnswerMutation = {
  updateQuizAnswer?:  {
    __typename: "QuizAnswer",
    id: string,
    quizQuestionId: string,
    answer: string,
    correct: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuizAnswerMutationVariables = {
  input?: DeleteQuizAnswerInput,
  condition?: ModelQuizAnswerConditionInput | null,
};

export type DeleteQuizAnswerMutation = {
  deleteQuizAnswer?:  {
    __typename: "QuizAnswer",
    id: string,
    quizQuestionId: string,
    answer: string,
    correct: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuizResponseMutationVariables = {
  input?: CreateQuizResponseInput,
  condition?: ModelQuizResponseConditionInput | null,
};

export type CreateQuizResponseMutation = {
  createQuizResponse?:  {
    __typename: "QuizResponse",
    id: string,
    quizId: string,
    quizAnswerId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuizResponseMutationVariables = {
  input?: UpdateQuizResponseInput,
  condition?: ModelQuizResponseConditionInput | null,
};

export type UpdateQuizResponseMutation = {
  updateQuizResponse?:  {
    __typename: "QuizResponse",
    id: string,
    quizId: string,
    quizAnswerId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuizResponseMutationVariables = {
  input?: DeleteQuizResponseInput,
  condition?: ModelQuizResponseConditionInput | null,
};

export type DeleteQuizResponseMutation = {
  deleteQuizResponse?:  {
    __typename: "QuizResponse",
    id: string,
    quizId: string,
    quizAnswerId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePollMutationVariables = {
  input?: CreatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type CreatePollMutation = {
  createPoll?:  {
    __typename: "Poll",
    id: string,
    lectureId: string,
    question: string,
    position?: number | null,
    choices?:  {
      __typename: "ModelPollChoiceConnection",
      items?:  Array< {
        __typename: "PollChoice",
        id: string,
        pollId: string,
        choice: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePollMutationVariables = {
  input?: UpdatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type UpdatePollMutation = {
  updatePoll?:  {
    __typename: "Poll",
    id: string,
    lectureId: string,
    question: string,
    position?: number | null,
    choices?:  {
      __typename: "ModelPollChoiceConnection",
      items?:  Array< {
        __typename: "PollChoice",
        id: string,
        pollId: string,
        choice: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePollMutationVariables = {
  input?: DeletePollInput,
  condition?: ModelPollConditionInput | null,
};

export type DeletePollMutation = {
  deletePoll?:  {
    __typename: "Poll",
    id: string,
    lectureId: string,
    question: string,
    position?: number | null,
    choices?:  {
      __typename: "ModelPollChoiceConnection",
      items?:  Array< {
        __typename: "PollChoice",
        id: string,
        pollId: string,
        choice: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePollChoiceMutationVariables = {
  input?: CreatePollChoiceInput,
  condition?: ModelPollChoiceConditionInput | null,
};

export type CreatePollChoiceMutation = {
  createPollChoice?:  {
    __typename: "PollChoice",
    id: string,
    pollId: string,
    choice: string,
    responses?:  {
      __typename: "ModelPollResponseConnection",
      items?:  Array< {
        __typename: "PollResponse",
        id: string,
        pollChoiceId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePollChoiceMutationVariables = {
  input?: UpdatePollChoiceInput,
  condition?: ModelPollChoiceConditionInput | null,
};

export type UpdatePollChoiceMutation = {
  updatePollChoice?:  {
    __typename: "PollChoice",
    id: string,
    pollId: string,
    choice: string,
    responses?:  {
      __typename: "ModelPollResponseConnection",
      items?:  Array< {
        __typename: "PollResponse",
        id: string,
        pollChoiceId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePollChoiceMutationVariables = {
  input?: DeletePollChoiceInput,
  condition?: ModelPollChoiceConditionInput | null,
};

export type DeletePollChoiceMutation = {
  deletePollChoice?:  {
    __typename: "PollChoice",
    id: string,
    pollId: string,
    choice: string,
    responses?:  {
      __typename: "ModelPollResponseConnection",
      items?:  Array< {
        __typename: "PollResponse",
        id: string,
        pollChoiceId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePollResponseMutationVariables = {
  input?: CreatePollResponseInput,
  condition?: ModelPollResponseConditionInput | null,
};

export type CreatePollResponseMutation = {
  createPollResponse?:  {
    __typename: "PollResponse",
    id: string,
    pollChoiceId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePollResponseMutationVariables = {
  input?: UpdatePollResponseInput,
  condition?: ModelPollResponseConditionInput | null,
};

export type UpdatePollResponseMutation = {
  updatePollResponse?:  {
    __typename: "PollResponse",
    id: string,
    pollChoiceId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePollResponseMutationVariables = {
  input?: DeletePollResponseInput,
  condition?: ModelPollResponseConditionInput | null,
};

export type DeletePollResponseMutation = {
  deletePollResponse?:  {
    __typename: "PollResponse",
    id: string,
    pollChoiceId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLectureQueryVariables = {
  id?: string,
};

export type GetLectureQuery = {
  getLecture?:  {
    __typename: "Lecture",
    id: string,
    title: string,
    description?: string | null,
    topics?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    quizzes?:  {
      __typename: "ModelQuizConnection",
      items?:  Array< {
        __typename: "Quiz",
        id: string,
        lectureId: string,
        title: string,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    polls?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLecturesQueryVariables = {
  filter?: ModelLectureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLecturesQuery = {
  listLectures?:  {
    __typename: "ModelLectureConnection",
    items?:  Array< {
      __typename: "Lecture",
      id: string,
      title: string,
      description?: string | null,
      topics?:  {
        __typename: "ModelTopicConnection",
        nextToken?: string | null,
      } | null,
      quizzes?:  {
        __typename: "ModelQuizConnection",
        nextToken?: string | null,
      } | null,
      polls?:  {
        __typename: "ModelTopicConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSessionQueryVariables = {
  id?: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    lectureId: string,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items?:  Array< {
      __typename: "Session",
      id: string,
      lectureId: string,
      endedAt?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAttendeeQueryVariables = {
  id?: string,
};

export type GetAttendeeQuery = {
  getAttendee?:  {
    __typename: "Attendee",
    id: string,
    studentId: string,
    sessionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttendeesQueryVariables = {
  filter?: ModelAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttendeesQuery = {
  listAttendees?:  {
    __typename: "ModelAttendeeConnection",
    items?:  Array< {
      __typename: "Attendee",
      id: string,
      studentId: string,
      sessionId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id?: string,
};

export type GetTopicQuery = {
  getTopic?:  {
    __typename: "Topic",
    id: string,
    lectureId: string,
    title: string,
    description?: string | null,
    position?: number | null,
    reactions?:  {
      __typename: "ModelTopicReactionConnection",
      items?:  Array< {
        __typename: "TopicReaction",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        reaction: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelTopicResponseConnection",
      items?:  Array< {
        __typename: "TopicResponse",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        type: TopicResponseType,
        response: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics?:  {
    __typename: "ModelTopicConnection",
    items?:  Array< {
      __typename: "Topic",
      id: string,
      lectureId: string,
      title: string,
      description?: string | null,
      position?: number | null,
      reactions?:  {
        __typename: "ModelTopicReactionConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelTopicResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTopicReactionQueryVariables = {
  id?: string,
};

export type GetTopicReactionQuery = {
  getTopicReaction?:  {
    __typename: "TopicReaction",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    reaction: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopicReactionsQueryVariables = {
  filter?: ModelTopicReactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicReactionsQuery = {
  listTopicReactions?:  {
    __typename: "ModelTopicReactionConnection",
    items?:  Array< {
      __typename: "TopicReaction",
      id: string,
      topicId: string,
      sessionId: string,
      studentId: string,
      reaction: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTopicResponseQueryVariables = {
  id?: string,
};

export type GetTopicResponseQuery = {
  getTopicResponse?:  {
    __typename: "TopicResponse",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    type: TopicResponseType,
    response: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopicResponsesQueryVariables = {
  filter?: ModelTopicResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicResponsesQuery = {
  listTopicResponses?:  {
    __typename: "ModelTopicResponseConnection",
    items?:  Array< {
      __typename: "TopicResponse",
      id: string,
      topicId: string,
      sessionId: string,
      studentId: string,
      type: TopicResponseType,
      response: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuizQueryVariables = {
  id?: string,
};

export type GetQuizQuery = {
  getQuiz?:  {
    __typename: "Quiz",
    id: string,
    lectureId: string,
    title: string,
    position?: number | null,
    questions?:  {
      __typename: "ModelQuizQuestionConnection",
      items?:  Array< {
        __typename: "QuizQuestion",
        id: string,
        quizId: string,
        question: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelQuizResponseConnection",
      items?:  Array< {
        __typename: "QuizResponse",
        id: string,
        quizId: string,
        quizAnswerId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuizsQueryVariables = {
  filter?: ModelQuizFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizsQuery = {
  listQuizs?:  {
    __typename: "ModelQuizConnection",
    items?:  Array< {
      __typename: "Quiz",
      id: string,
      lectureId: string,
      title: string,
      position?: number | null,
      questions?:  {
        __typename: "ModelQuizQuestionConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelQuizResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuizQuestionQueryVariables = {
  id?: string,
};

export type GetQuizQuestionQuery = {
  getQuizQuestion?:  {
    __typename: "QuizQuestion",
    id: string,
    quizId: string,
    question: string,
    answers?:  {
      __typename: "ModelQuizAnswerConnection",
      items?:  Array< {
        __typename: "QuizAnswer",
        id: string,
        quizQuestionId: string,
        answer: string,
        correct: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuizQuestionsQueryVariables = {
  filter?: ModelQuizQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizQuestionsQuery = {
  listQuizQuestions?:  {
    __typename: "ModelQuizQuestionConnection",
    items?:  Array< {
      __typename: "QuizQuestion",
      id: string,
      quizId: string,
      question: string,
      answers?:  {
        __typename: "ModelQuizAnswerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuizAnswerQueryVariables = {
  id?: string,
};

export type GetQuizAnswerQuery = {
  getQuizAnswer?:  {
    __typename: "QuizAnswer",
    id: string,
    quizQuestionId: string,
    answer: string,
    correct: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuizAnswersQueryVariables = {
  filter?: ModelQuizAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizAnswersQuery = {
  listQuizAnswers?:  {
    __typename: "ModelQuizAnswerConnection",
    items?:  Array< {
      __typename: "QuizAnswer",
      id: string,
      quizQuestionId: string,
      answer: string,
      correct: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuizResponseQueryVariables = {
  id?: string,
};

export type GetQuizResponseQuery = {
  getQuizResponse?:  {
    __typename: "QuizResponse",
    id: string,
    quizId: string,
    quizAnswerId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuizResponsesQueryVariables = {
  filter?: ModelQuizResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizResponsesQuery = {
  listQuizResponses?:  {
    __typename: "ModelQuizResponseConnection",
    items?:  Array< {
      __typename: "QuizResponse",
      id: string,
      quizId: string,
      quizAnswerId: string,
      sessionId: string,
      studentId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPollQueryVariables = {
  id?: string,
};

export type GetPollQuery = {
  getPoll?:  {
    __typename: "Poll",
    id: string,
    lectureId: string,
    question: string,
    position?: number | null,
    choices?:  {
      __typename: "ModelPollChoiceConnection",
      items?:  Array< {
        __typename: "PollChoice",
        id: string,
        pollId: string,
        choice: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPollsQueryVariables = {
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollsQuery = {
  listPolls?:  {
    __typename: "ModelPollConnection",
    items?:  Array< {
      __typename: "Poll",
      id: string,
      lectureId: string,
      question: string,
      position?: number | null,
      choices?:  {
        __typename: "ModelPollChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPollChoiceQueryVariables = {
  id?: string,
};

export type GetPollChoiceQuery = {
  getPollChoice?:  {
    __typename: "PollChoice",
    id: string,
    pollId: string,
    choice: string,
    responses?:  {
      __typename: "ModelPollResponseConnection",
      items?:  Array< {
        __typename: "PollResponse",
        id: string,
        pollChoiceId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPollChoicesQueryVariables = {
  filter?: ModelPollChoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollChoicesQuery = {
  listPollChoices?:  {
    __typename: "ModelPollChoiceConnection",
    items?:  Array< {
      __typename: "PollChoice",
      id: string,
      pollId: string,
      choice: string,
      responses?:  {
        __typename: "ModelPollResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPollResponseQueryVariables = {
  id?: string,
};

export type GetPollResponseQuery = {
  getPollResponse?:  {
    __typename: "PollResponse",
    id: string,
    pollChoiceId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPollResponsesQueryVariables = {
  filter?: ModelPollResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollResponsesQuery = {
  listPollResponses?:  {
    __typename: "ModelPollResponseConnection",
    items?:  Array< {
      __typename: "PollResponse",
      id: string,
      pollChoiceId: string,
      sessionId: string,
      studentId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLectureSubscription = {
  onCreateLecture?:  {
    __typename: "Lecture",
    id: string,
    title: string,
    description?: string | null,
    topics?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    quizzes?:  {
      __typename: "ModelQuizConnection",
      items?:  Array< {
        __typename: "Quiz",
        id: string,
        lectureId: string,
        title: string,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    polls?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLectureSubscription = {
  onUpdateLecture?:  {
    __typename: "Lecture",
    id: string,
    title: string,
    description?: string | null,
    topics?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    quizzes?:  {
      __typename: "ModelQuizConnection",
      items?:  Array< {
        __typename: "Quiz",
        id: string,
        lectureId: string,
        title: string,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    polls?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLectureSubscription = {
  onDeleteLecture?:  {
    __typename: "Lecture",
    id: string,
    title: string,
    description?: string | null,
    topics?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    quizzes?:  {
      __typename: "ModelQuizConnection",
      items?:  Array< {
        __typename: "Quiz",
        id: string,
        lectureId: string,
        title: string,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    polls?:  {
      __typename: "ModelTopicConnection",
      items?:  Array< {
        __typename: "Topic",
        id: string,
        lectureId: string,
        title: string,
        description?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    lectureId: string,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    lectureId: string,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    lectureId: string,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttendeeSubscription = {
  onCreateAttendee?:  {
    __typename: "Attendee",
    id: string,
    studentId: string,
    sessionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttendeeSubscription = {
  onUpdateAttendee?:  {
    __typename: "Attendee",
    id: string,
    studentId: string,
    sessionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttendeeSubscription = {
  onDeleteAttendee?:  {
    __typename: "Attendee",
    id: string,
    studentId: string,
    sessionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic?:  {
    __typename: "Topic",
    id: string,
    lectureId: string,
    title: string,
    description?: string | null,
    position?: number | null,
    reactions?:  {
      __typename: "ModelTopicReactionConnection",
      items?:  Array< {
        __typename: "TopicReaction",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        reaction: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelTopicResponseConnection",
      items?:  Array< {
        __typename: "TopicResponse",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        type: TopicResponseType,
        response: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic?:  {
    __typename: "Topic",
    id: string,
    lectureId: string,
    title: string,
    description?: string | null,
    position?: number | null,
    reactions?:  {
      __typename: "ModelTopicReactionConnection",
      items?:  Array< {
        __typename: "TopicReaction",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        reaction: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelTopicResponseConnection",
      items?:  Array< {
        __typename: "TopicResponse",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        type: TopicResponseType,
        response: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic?:  {
    __typename: "Topic",
    id: string,
    lectureId: string,
    title: string,
    description?: string | null,
    position?: number | null,
    reactions?:  {
      __typename: "ModelTopicReactionConnection",
      items?:  Array< {
        __typename: "TopicReaction",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        reaction: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelTopicResponseConnection",
      items?:  Array< {
        __typename: "TopicResponse",
        id: string,
        topicId: string,
        sessionId: string,
        studentId: string,
        type: TopicResponseType,
        response: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTopicReactionSubscription = {
  onCreateTopicReaction?:  {
    __typename: "TopicReaction",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    reaction: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicReactionSubscription = {
  onUpdateTopicReaction?:  {
    __typename: "TopicReaction",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    reaction: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicReactionSubscription = {
  onDeleteTopicReaction?:  {
    __typename: "TopicReaction",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    reaction: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTopicResponseSubscription = {
  onCreateTopicResponse?:  {
    __typename: "TopicResponse",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    type: TopicResponseType,
    response: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicResponseSubscription = {
  onUpdateTopicResponse?:  {
    __typename: "TopicResponse",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    type: TopicResponseType,
    response: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicResponseSubscription = {
  onDeleteTopicResponse?:  {
    __typename: "TopicResponse",
    id: string,
    topicId: string,
    sessionId: string,
    studentId: string,
    type: TopicResponseType,
    response: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuizSubscription = {
  onCreateQuiz?:  {
    __typename: "Quiz",
    id: string,
    lectureId: string,
    title: string,
    position?: number | null,
    questions?:  {
      __typename: "ModelQuizQuestionConnection",
      items?:  Array< {
        __typename: "QuizQuestion",
        id: string,
        quizId: string,
        question: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelQuizResponseConnection",
      items?:  Array< {
        __typename: "QuizResponse",
        id: string,
        quizId: string,
        quizAnswerId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuizSubscription = {
  onUpdateQuiz?:  {
    __typename: "Quiz",
    id: string,
    lectureId: string,
    title: string,
    position?: number | null,
    questions?:  {
      __typename: "ModelQuizQuestionConnection",
      items?:  Array< {
        __typename: "QuizQuestion",
        id: string,
        quizId: string,
        question: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelQuizResponseConnection",
      items?:  Array< {
        __typename: "QuizResponse",
        id: string,
        quizId: string,
        quizAnswerId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuizSubscription = {
  onDeleteQuiz?:  {
    __typename: "Quiz",
    id: string,
    lectureId: string,
    title: string,
    position?: number | null,
    questions?:  {
      __typename: "ModelQuizQuestionConnection",
      items?:  Array< {
        __typename: "QuizQuestion",
        id: string,
        quizId: string,
        question: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelQuizResponseConnection",
      items?:  Array< {
        __typename: "QuizResponse",
        id: string,
        quizId: string,
        quizAnswerId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuizQuestionSubscription = {
  onCreateQuizQuestion?:  {
    __typename: "QuizQuestion",
    id: string,
    quizId: string,
    question: string,
    answers?:  {
      __typename: "ModelQuizAnswerConnection",
      items?:  Array< {
        __typename: "QuizAnswer",
        id: string,
        quizQuestionId: string,
        answer: string,
        correct: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuizQuestionSubscription = {
  onUpdateQuizQuestion?:  {
    __typename: "QuizQuestion",
    id: string,
    quizId: string,
    question: string,
    answers?:  {
      __typename: "ModelQuizAnswerConnection",
      items?:  Array< {
        __typename: "QuizAnswer",
        id: string,
        quizQuestionId: string,
        answer: string,
        correct: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuizQuestionSubscription = {
  onDeleteQuizQuestion?:  {
    __typename: "QuizQuestion",
    id: string,
    quizId: string,
    question: string,
    answers?:  {
      __typename: "ModelQuizAnswerConnection",
      items?:  Array< {
        __typename: "QuizAnswer",
        id: string,
        quizQuestionId: string,
        answer: string,
        correct: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuizAnswerSubscription = {
  onCreateQuizAnswer?:  {
    __typename: "QuizAnswer",
    id: string,
    quizQuestionId: string,
    answer: string,
    correct: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuizAnswerSubscription = {
  onUpdateQuizAnswer?:  {
    __typename: "QuizAnswer",
    id: string,
    quizQuestionId: string,
    answer: string,
    correct: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuizAnswerSubscription = {
  onDeleteQuizAnswer?:  {
    __typename: "QuizAnswer",
    id: string,
    quizQuestionId: string,
    answer: string,
    correct: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuizResponseSubscription = {
  onCreateQuizResponse?:  {
    __typename: "QuizResponse",
    id: string,
    quizId: string,
    quizAnswerId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuizResponseSubscription = {
  onUpdateQuizResponse?:  {
    __typename: "QuizResponse",
    id: string,
    quizId: string,
    quizAnswerId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuizResponseSubscription = {
  onDeleteQuizResponse?:  {
    __typename: "QuizResponse",
    id: string,
    quizId: string,
    quizAnswerId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePollSubscription = {
  onCreatePoll?:  {
    __typename: "Poll",
    id: string,
    lectureId: string,
    question: string,
    position?: number | null,
    choices?:  {
      __typename: "ModelPollChoiceConnection",
      items?:  Array< {
        __typename: "PollChoice",
        id: string,
        pollId: string,
        choice: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePollSubscription = {
  onUpdatePoll?:  {
    __typename: "Poll",
    id: string,
    lectureId: string,
    question: string,
    position?: number | null,
    choices?:  {
      __typename: "ModelPollChoiceConnection",
      items?:  Array< {
        __typename: "PollChoice",
        id: string,
        pollId: string,
        choice: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePollSubscription = {
  onDeletePoll?:  {
    __typename: "Poll",
    id: string,
    lectureId: string,
    question: string,
    position?: number | null,
    choices?:  {
      __typename: "ModelPollChoiceConnection",
      items?:  Array< {
        __typename: "PollChoice",
        id: string,
        pollId: string,
        choice: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePollChoiceSubscription = {
  onCreatePollChoice?:  {
    __typename: "PollChoice",
    id: string,
    pollId: string,
    choice: string,
    responses?:  {
      __typename: "ModelPollResponseConnection",
      items?:  Array< {
        __typename: "PollResponse",
        id: string,
        pollChoiceId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePollChoiceSubscription = {
  onUpdatePollChoice?:  {
    __typename: "PollChoice",
    id: string,
    pollId: string,
    choice: string,
    responses?:  {
      __typename: "ModelPollResponseConnection",
      items?:  Array< {
        __typename: "PollResponse",
        id: string,
        pollChoiceId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePollChoiceSubscription = {
  onDeletePollChoice?:  {
    __typename: "PollChoice",
    id: string,
    pollId: string,
    choice: string,
    responses?:  {
      __typename: "ModelPollResponseConnection",
      items?:  Array< {
        __typename: "PollResponse",
        id: string,
        pollChoiceId: string,
        sessionId: string,
        studentId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePollResponseSubscription = {
  onCreatePollResponse?:  {
    __typename: "PollResponse",
    id: string,
    pollChoiceId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePollResponseSubscription = {
  onUpdatePollResponse?:  {
    __typename: "PollResponse",
    id: string,
    pollChoiceId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePollResponseSubscription = {
  onDeletePollResponse?:  {
    __typename: "PollResponse",
    id: string,
    pollChoiceId: string,
    sessionId: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
