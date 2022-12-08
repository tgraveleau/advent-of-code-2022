export const sectionInAnotherOne = (section1, section2) => (section1[0] >= section2[0] && section1[1] <= section2[1])

export const sectionOverlapAnotherOne = (section1, section2) => (section1[0] >= section2[0] && section1[0] <= section2[1]) || (section1[1] >= section2[0] && section1[1] <= section2[1])
