def bestTower(self, towers, center, radius):
    first = -1
    second = -1
    max_dis = -1
    for tower in towers:
        manhattan_distance = abs(tower[0]-center[0]) + abs(tower[1]-center[1])
        if manhattan_distance<=radius:
            new_dis= abs(tower[0]-tower[1])
            if max_dis < new_dis:
                max_dis = new_dis
                first = tower[0]
                second = tower[1]
            elif max_dis == new_dis:
                max_dis_coordinates_sum = first + second
                new_dis_coordinates_sum = tower[0] + tower[1]
                if max_dis_coordinates_sum > new_dis_coordinates_sum:
                    max_dis = new_dis
                    first = tower[0]
                    second = tower[1]

    return [first,second]

