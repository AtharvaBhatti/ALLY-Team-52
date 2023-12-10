from flask import Flask, request, jsonify
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(_name_)

def calculate_similarity_matrix(users):
    skill_matrix = np.array([list(user['skills'].values()) for user in users])
    similarity_matrix = cosine_similarity(skill_matrix, skill_matrix)
    return similarity_matrix

def recommend_best_team(users, skill_requirements, team_size):
    similarity_matrix = calculate_similarity_matrix(users)

    team = []
    first_member_index = np.argmax(np.sum(similarity_matrix[:, list(skill_requirements.keys())], axis=1))
    team.append(users[first_member_index])

    for _ in range(team_size - 1):
        remaining_indices = set(range(len(users))) - set([user['name'] for user in team])
        next_member_index = max(remaining_indices, key=lambda i: np.mean(similarity_matrix[i, [user['name'] for user in team]]))
        team.append(users[next_member_index])

    return team

@app.route('/recommend_team', methods=['POST'])
def recommend_team():
    try:
        data = request.get_json()

        required_skills = data.get('required_skills', {})
        user_skills = data.get('user_skills', [])
        team_size = data.get('team_size', 3)

        recommended_team = recommend_best_team(user_skills, required_skills, team_size)

        response = {
            'recommended_team': [{'name': member['name'], 'skills': member['skills']} for member in recommended_team]
        }

        return jsonify(response), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if _name_ == '_main_':
    app.run(debug=True)