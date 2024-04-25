import { gql } from "graphql-tag"

export const GET_LISTS = gql`
  query {
    Lists {
        id,
        title
        items {
          id,
          title,
          status
        }
      } 
    CVLists {
        id,
        title
        cvs {
          id,
          name,
          position,
          overview,
          capabilities,
          qualifications,
          certifications,
          experience {
            id,
            company,
            position,
            location,
            startDate,
            endDate,
            overview,
            keyResponsibilities,
            keyAchievements
          },
          education {
            id,
            institution,
            degree,
            major,
            startDate,
            endDate,
            location,
            overview
          }
        }
      }
  }
`;