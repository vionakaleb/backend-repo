// interface User {
//     id: string;
//     totalAverageWeightRatings: number;
//     numberOfRents: number;
//     recentlyActive: string;
// }

class User {
    constructor(id, totalAverageWeightRatings, numberOfRents, recentlyActive) {
        (this.id = id),
            (this.totalAverageWeightRatings = totalAverageWeightRatings),
            (this.numberOfRents = numberOfRents),
            (this.recentlyActive = recentlyActive)
    }
}

export default User;